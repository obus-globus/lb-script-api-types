import type { MBeanNotificationInfo } from '../../javax/management/MBeanNotificationInfo.d.ts'
import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NotificationBroadcaster extends Object{
    addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;
    getNotificationInfo(): MBeanNotificationInfo[];
    removeNotificationListener(arg0: NotificationListener): void;
}