import type { TimerTask } from '../../../java/util/TimerTask.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { PeriodicNotificationManager$Notification } from '../../../net/minecraft/client/PeriodicNotificationManager$Notification.d.ts'
export class PeriodicNotificationManager$NotificationTask extends TimerTask {
    constructor(notifications: PeriodicNotificationManager$Notification[], elapsed: number, period: number)
    // private elapsed: AtomicLong;
    // private minecraft: Minecraft;
    // private notifications: PeriodicNotificationManager$Notification[];
    // private period: number;
    reset(notifications: PeriodicNotificationManager$Notification[], period: number): PeriodicNotificationManager$NotificationTask;
    run(): void;
}