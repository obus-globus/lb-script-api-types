import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class PointProcessorGaussian$Dynamic extends ToggleableValueGroup {
    constructor(null_: PointProcessorGaussian$Dynamic)
    readonly hurtTime: number;
    readonly pitchFactor: number;
    readonly speed: ClosedFloatingPointRange<number>;
    readonly tolerance: number;
    readonly yawFactor: number;
}