import { inject, Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { IdentityService } from "@identity";
import {
  ApplicationSettings,
  ChangeEmailRequest,
  ChangePasswordRequest,
  ConfirmChangeEmailRequest,
  LayoutConfig,
  UpdateProfileRequest,
} from "@profile";
import { filter, of, switchMap, tap } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
/**
 * @class ProfileService
 * @description
 * The ProfileService class provides methods to manage user profiles, devices, and application settings.
 * It interacts with the DataService and IdentityService to perform various operations such as fetching
 * and updating profiles, managing devices, and handling application settings.
 */
export class ProfileService {
  #dataService = inject(DataService);
  #identityService = inject(IdentityService);

  // This should be kept in sync with the server-side BrowserSettings class.
  #defaultApplicationSettings: ApplicationSettings = {
    style: {
      preset: "Aura",
      primary: "emerald",
      surface: null,
      darkTheme: false,
      menuMode: "static",
    },
    extended: {},
    features: {},
    preferences: {},
  };

  #settings?: ApplicationSettings;

  /**
   * Constructs the ProfileService and sets up the subscription to handle user logout.
   */
  constructor() {
    this.#identityService
      .watchLoggedIn$()
      .pipe(
        takeUntilDestroyed(),
        filter(loggedIn => !loggedIn)
      )
      .subscribe(() => {
        this.#settings = undefined;
      });
  }

  /**
   * @method getProfile
   * @description Fetches the user profile.
   * @returns {Observable<Profile>} An observable containing the user profile.
   */
  getProfile() {
    return this.#dataService.getProfile();
  }

  /**
   * @method updateProfile
   * @description Updates the user profile.
   * @param {UpdateProfileRequest} updateProfileRequest - The request object containing profile update information.
   * @returns {Observable<Profile>} An observable containing the updated profile.
   */
  updateProfile(updateProfileRequest: UpdateProfileRequest) {
    return this.#dataService.updateProfile(updateProfileRequest);
  }

  /**
   * @method getDevices
   * @description Fetches the list of devices associated with the user.
   * @returns {Observable<Array<Device>>} An observable containing the list of devices.
   */
  getDevices() {
    return this.#dataService.getDevices();
  }

  /**
   * @method revokeDevice
   * @description Revokes a device by its ID.
   * @param {string} deviceId - The ID of the device to revoke.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  revokeDevice(deviceId: string) {
    return this.#dataService.revokeDevice(deviceId);
  }

  /**
   * @method changePassword
   * @description Changes the user's password.
   * @param {ChangePasswordRequest} changePasswordRequest - The request object containing password change information.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  changePassword(changePasswordRequest: ChangePasswordRequest) {
    return this.#dataService.changePassword(changePasswordRequest);
  }

  /**
   * @method changeEmail
   * @description Changes the user's email address.
   * @param {ChangeEmailRequest} changeEmailRequest - The request object containing email change information.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  changeEmail(changeEmailRequest: ChangeEmailRequest) {
    return this.#dataService.changeEmail(changeEmailRequest);
  }

  /**
   * @method confirmEmailChange
   * @description Confirms the user's email change.
   * @param {ConfirmChangeEmailRequest} confirmChangeEmailRequest - The request object containing email change confirmation information.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  confirmEmailChange(confirmChangeEmailRequest: ConfirmChangeEmailRequest) {
    return this.#dataService.confirmEmailChange(confirmChangeEmailRequest);
  }

  /**
   * @method getSettings
   * @description Fetches the application settings. If settings are already loaded, returns them from memory.
   * @returns {Observable<ApplicationSettings>} An observable containing the application settings.
   */
  getSettings() {
    if (this.#settings) return of(this.#settings);

    return this.#dataService.getSettings().pipe(
      tap(settings => {
        this.#settings = JSON.parse(JSON.stringify(settings));
      })
    );
  }

  /**
   * @method updateSettings
   * @description Updates the application settings.
   * @param {ApplicationSettings} browserSettings - The new application settings to be updated.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  updateSettings(browserSettings: ApplicationSettings) {
    if (this.#settings) {
      this.#settings = browserSettings;
    }
    return this.#dataService.updateSettings(browserSettings);
  }

  /**
   * @method updateStyleSettings
   * @description Updates the style settings of the application.
   * @param {LayoutConfig} styleSettings - The new style settings to be updated.
   * @returns {Observable<boolean>} An observable containing true if successful.
   */
  updateStyleSettings(styleSettings: LayoutConfig) {
    return this.getSettings().pipe(
      switchMap(response => {
        if (!response || JSON.stringify(response.style) === JSON.stringify(styleSettings)) return of(response);
        return this.updateSettings({ ...response, style: styleSettings });
      })
    );
  }

  /**
   * @method getDefaultStyleSettings
   * @description Retrieves the default style settings.
   * @returns {LayoutConfig} The default style settings.
   */
  getDefaultStyleSettings() {
    return JSON.parse(JSON.stringify(this.#defaultApplicationSettings.style)) as LayoutConfig;
  }

  /**
   * @method hasLoadedStyleSettings
   * @description Checks if the style settings have been loaded.
   * @returns {boolean} True if the style settings have been loaded, false otherwise.
   */
  hasLoadedStyleSettings() {
    return !!this.#settings;
  }
}
