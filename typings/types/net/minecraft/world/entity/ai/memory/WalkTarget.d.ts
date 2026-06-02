import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WalkTarget extends Object {
    constructor(target: BlockPos, speedModifier: number, closeEnoughDist: number)
    constructor(target: Entity, speedModifier: number, closeEnoughDist: number)
    constructor(target: PositionTracker, speedModifier: number, closeEnoughDist: number)
    constructor(target: Vec3, speedModifier: number, closeEnoughDist: number)
    readonly closeEnoughDist: number;
    readonly speedModifier: number;
    readonly target: PositionTracker;
    getCloseEnoughDist(): number;
    getSpeedModifier(): number;
    getTarget(): PositionTracker;
}