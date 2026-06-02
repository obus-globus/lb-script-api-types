import type { Object2BooleanFunction } from '../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Timer } from '../../../java/util/Timer.d.ts'
import type { FabricResourceReloader } from '../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { PeriodicNotificationManager$Notification } from '../../../net/minecraft/client/PeriodicNotificationManager$Notification.d.ts'
import type { PeriodicNotificationManager$NotificationTask } from '../../../net/minecraft/client/PeriodicNotificationManager$NotificationTask.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class PeriodicNotificationManager extends SimplePreparableReloadListener<{ [key: string]: PeriodicNotificationManager$Notification[] }> implements AutoCloseable, FabricResourceReloader {
    constructor(notifications: Identifier, selector: (param0: string) => kotlin.Boolean)
    // private fabric$id: Identifier;
    // private notificationTask: PeriodicNotificationManager$NotificationTask;
    // private notifications: Identifier;
    // private selector: (param0: string) => kotlin.Boolean;
    // private timer: Timer;
    apply(preparations: { [key: string]: PeriodicNotificationManager$Notification[] }, manager: ResourceManager, profiler: ProfilerFiller): void;
    // private calculateInitialDelay(notifications: PeriodicNotificationManager$Notification[]): number;
    // private calculateOptimalPeriod(notifications: PeriodicNotificationManager$Notification[], initialDelay: number): number;
    close(): void;
    fabric$getId(): Identifier;
    getName(): string;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): { [key: string]: PeriodicNotificationManager$Notification[] };
    // private stopTimer(): void;
}