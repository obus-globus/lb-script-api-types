import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class Leashable$LeashData extends Object {
    static CODEC: Codec<Leashable$LeashData>;
    private constructor(delayedLeashInfo: Either<UUID, BlockPos>)
    private constructor(entityId: number)
    private constructor(entity: Entity)
    angularMomentum: number;
    // private delayedLeashHolderId: number;
    delayedLeashInfo: Either<UUID, BlockPos>;
    leashHolder: Entity;
    setLeashHolder(leashHolder: Entity): void;
}