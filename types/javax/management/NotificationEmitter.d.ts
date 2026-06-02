import type { NotificationBroadcaster } from '../../javax/management/NotificationBroadcaster.d.ts'
import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface NotificationEmitter extends NotificationBroadcaster, Object{
    removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;
}