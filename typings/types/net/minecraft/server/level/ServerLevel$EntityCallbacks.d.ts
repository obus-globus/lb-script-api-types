import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LevelCallback } from '../../../../net/minecraft/world/level/entity/LevelCallback.d.ts'
export class ServerLevel$EntityCallbacks extends Object implements LevelCallback<Entity> {
    private constructor(null_: ServerLevel)
    // private outer: ServerLevel;
    onCreated(entity: Entity): void;
    onDestroyed(entity: Entity): void;
    onSectionChange(entity: Entity): void;
    onTickingEnd(entity: Entity): void;
    onTickingStart(entity: Entity): void;
    onTrackingEnd(entity: Entity): void;
    onTrackingStart(entity: Entity): void;
}