import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Notification } from '../../javax/management/Notification.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NotificationFilter extends Serializable, Object{
    isNotificationEnabled(arg0: Notification): boolean;
}