import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class AccelerationAngleSmooth$SigmoidDeceleration extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth$SigmoidDeceleration)
    readonly midpoint: number;
    readonly steepness: number;
    computeDecelerationFactor(rotationDifference: number): number;
}