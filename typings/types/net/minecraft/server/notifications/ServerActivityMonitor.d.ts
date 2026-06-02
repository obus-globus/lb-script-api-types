import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NotificationManager } from '../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
export class ServerActivityMonitor extends Object {
    constructor(notificationManager: NotificationManager, secondsBetweenNotifications: number)
    // private lastNotificationTime: AtomicLong;
    // private minimumMillisBetweenNotifications: number;
    // private notificationManager: NotificationManager;
    // private serverActivity: AtomicBoolean;
    // private processWithRateLimit(): void;
    reportLoginActivity(): void;
    tick(): void;
}