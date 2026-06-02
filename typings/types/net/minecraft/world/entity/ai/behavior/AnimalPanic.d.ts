import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { DamageType } from '../../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AnimalPanic<E extends PathfinderMob> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    constructor(speedMultiplier: number)
    constructor(speedMultiplier: number, panicCausingDamageTypes: (param0: PathfinderMob) => TagKey<DamageType>)
    constructor(speedMultiplier: number, panicCausingDamageTypes: (param0: PathfinderMob) => TagKey<DamageType>, positionGetter: (param0: E) => Vec3)
    constructor(speedMultiplier: number, flyHeight: number)
    // private panicCausingDamageTypes: (param0: PathfinderMob) => TagKey<DamageType>;
    // private positionGetter: (param0: E) => Vec3;
    // private speedMultiplier: number;
    canStillUse(level: ServerLevel, body: E, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: E): boolean;
    // private getPanicPos(body: E, level: ServerLevel): Vec3;
    // private lookForWater(level: BlockGetter, mob: Entity): Optional<BlockPos>;
    start(level: ServerLevel, body: E, timestamp: number): void;
    stop(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
}