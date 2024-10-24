import { inject, Injectable } from "@angular/core";
import { BrowserSettings, ChangePasswordRequest, UpdateProfileRequest } from "@profile";
import { DataService } from "./data.service";
import { delay, map, of, tap } from "rxjs";
import { ApiResponse, ErrorApiResponse } from "@core";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  #dataService = inject(DataService);

  #settingsResponse?: ApiResponse<BrowserSettings>;

  getProfile() {
    return this.#dataService.getProfile();
  }

  updateProfile(updateProfileRequest: UpdateProfileRequest) {
    return this.#dataService.updateProfile(updateProfileRequest);
  }

  getDevices() {
    return this.#dataService.getDevices();
  }

  revokeDevice(deviceId: string) {
    return this.#dataService.revokeDevice(deviceId);
  }

  changePassword(changePasswordRequest: ChangePasswordRequest) {
    return this.#dataService.changePassword(changePasswordRequest);
  }

  getSettings() {
    if (this.#settingsResponse) return of(this.#settingsResponse);

    return this.#dataService.getSettings().pipe(tap(response => {
        if (response.result) {
          this.#settingsResponse = response;
        }
    }));
  }

  updateSettings(browserSettings: BrowserSettings) {
    if (this.#settingsResponse) {
        this.#settingsResponse.result = browserSettings;
    }
    return this.#dataService.updateSettings(browserSettings);
  }

}
