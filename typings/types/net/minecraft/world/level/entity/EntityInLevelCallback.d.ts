import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
export interface EntityInLevelCallback extends Object{
    onMove(): void;
    onRemove(reason: Entity$RemovalReason): void;
}