import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrapPlayerSimulation$PredictedPlayerPos extends Object {
    constructor(nextOnGround: Vec3 | null, ticksToGround: number | null, currPos: Vec3, isStationary: boolean)
    readonly currPos: Vec3;
    // private isStationary: boolean;
    /*not mapped: */ isStationary(): boolean;
    readonly nextOnGround: Vec3 | null;
    readonly ticksToGround: number | null;
}