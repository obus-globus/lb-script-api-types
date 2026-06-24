import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AccelerationAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth.d.ts'
export class AccelerationAngleSmooth$SigmoidDeceleration extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth)
    readonly midpoint: number;
    readonly steepness: number;
    computeDecelerationFactor(rotationDifference: number): number;
}