import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ToggleableMovementTracker } from '../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/ToggleableMovementTracker.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityInLevelCallback } from '../../../../../net/minecraft/world/level/entity/EntityInLevelCallback.d.ts'
import type { EntitySection } from '../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
import type { Visibility } from '../../../../../net/minecraft/world/level/entity/Visibility.d.ts'
export class PersistentEntitySectionManager$Callback extends Object implements ToggleableMovementTracker, EntityInLevelCallback {
    static NULL: EntityInLevelCallback;
    private constructor(null_: PersistentEntitySectionManager$Callback, currentSectionKey: number, currentSection: EntitySection<T>)
    // private currentSection: EntitySection<T>;
    // private currentSectionKey: number;
    // private entity: T;
    // private notificationMask: number;
    lithium$setNotificationMask(arg0: number): number;
    // private notifyMovementListeners(): void;
    onMove(): void;
    onRemove(reason: Entity$RemovalReason): void;
    // private updateStatus(previousStatus: Visibility, newStatus: Visibility): void;
}