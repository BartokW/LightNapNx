import { NotificationItem } from "./notification-item";

export interface LatestNotifications {
  unreadCount: number;
  notifications: Array<NotificationItem>;
}
