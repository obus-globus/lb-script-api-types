import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LevelCallback } from '../../../../net/minecraft/world/level/entity/LevelCallback.d.ts'
export class ClientLevel$EntityCallbacks extends Object implements LevelCallback<Entity> {
    private constructor(null_: ClientLevel$EntityCallbacks)
    onCreated(entity: Entity): void;
    onDestroyed(entity: Entity): void;
    onSectionChange(entity: Entity): void;
    onTickingEnd(entity: Entity): void;
    onTickingStart(entity: Entity): void;
    onTrackingEnd(entity: Entity): void;
    onTrackingStart(entity: Entity): void;
}