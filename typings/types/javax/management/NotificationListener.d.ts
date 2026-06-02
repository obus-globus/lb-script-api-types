import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Notification } from '../../javax/management/Notification.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NotificationListener extends EventListener, Object{
    handleNotification(arg0: Notification, arg1: Object): void;
}