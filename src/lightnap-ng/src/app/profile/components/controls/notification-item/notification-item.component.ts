import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { SincePipe } from "@core";
import { NotificationItem, NotificationService } from "@profile";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "notification-item",
  standalone: true,
  templateUrl: "./notification-item.component.html",
  imports: [CommonModule, ButtonModule, SincePipe],
})
export class NotificationItemComponent {
  readonly #notificationService = inject(NotificationService);
  readonly #router = inject(Router);
  readonly notification = input.required<NotificationItem>();

  onClick() {
    this.#notificationService.markNotificationAsRead(this.notification().id).subscribe();
    this.#router.navigate(this.notification().routerLink);
  }
}
