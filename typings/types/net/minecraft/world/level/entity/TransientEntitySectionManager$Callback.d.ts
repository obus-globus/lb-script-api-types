import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityInLevelCallback } from '../../../../../net/minecraft/world/level/entity/EntityInLevelCallback.d.ts'
import type { EntitySection } from '../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
import type { TransientEntitySectionManager } from '../../../../../net/minecraft/world/level/entity/TransientEntitySectionManager.d.ts'
export class TransientEntitySectionManager$Callback extends Object implements EntityInLevelCallback {
    static NULL: EntityInLevelCallback;
    private constructor(null_: TransientEntitySectionManager<T>, entity: T, currentSectionKey: number, currentSection: EntitySection<T>)
    // private currentSection: EntitySection<T>;
    // private currentSectionKey: number;
    // private entity: T;
    onMove(): void;
    onRemove(reason: Entity$RemovalReason): void;
}