import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityInLevelCallback } from '../../../../../net/minecraft/world/level/entity/EntityInLevelCallback.d.ts'
import type { UniquelyIdentifyable } from '../../../../../net/minecraft/world/level/entity/UniquelyIdentifyable.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export interface EntityAccess extends Object, UniquelyIdentifyable{
    blockPosition(): BlockPos;
    getBoundingBox(): AABB;
    getId(): number;
    getPassengersAndSelf(): Stream<EntityAccess>;
    getSelfAndPassengers(): Stream<EntityAccess>;
    getUUID(): UUID;
    isAlwaysTicking(): boolean;
    isRemoved(): boolean;
    setLevelCallback(callback: EntityInLevelCallback): void;
    setRemoved(removalReason: Entity$RemovalReason): void;
    shouldBeSaved(): boolean;
}