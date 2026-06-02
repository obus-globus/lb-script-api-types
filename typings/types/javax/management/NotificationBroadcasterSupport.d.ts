import type { Executor } from '../../java/util/concurrent/Executor.d.ts'
import type { MBeanNotificationInfo } from '../../javax/management/MBeanNotificationInfo.d.ts'
import type { Notification } from '../../javax/management/Notification.d.ts'
import type { NotificationBroadcasterSupport$ListenerInfo } from '../../javax/management/NotificationBroadcasterSupport$ListenerInfo.d.ts'
import type { NotificationEmitter } from '../../javax/management/NotificationEmitter.d.ts'
import type { NotificationFilter } from '../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../javax/management/NotificationListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class NotificationBroadcasterSupport extends Object implements NotificationEmitter {
    constructor()
    constructor(arg0: Executor)
    constructor(arg0: Executor, arg1: MBeanNotificationInfo[])
    constructor(arg0: MBeanNotificationInfo[])
    // private executor: Executor;
    // private listenerList: NotificationBroadcasterSupport$ListenerInfo[];
    // private notifInfo: MBeanNotificationInfo[];
    addNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;
    getNotificationInfo(): MBeanNotificationInfo[];
    handleNotification(arg0: NotificationListener, arg1: Notification, arg2: Object): void;
    removeNotificationListener(arg0: NotificationListener): void;
    removeNotificationListener(arg0: NotificationListener, arg1: NotificationFilter, arg2: Object): void;
    sendNotification(arg0: Notification): void;
}