import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class AccelerationAngleSmooth$DynamicAccel extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth$DynamicAccel)
    readonly coefDistance: number;
    readonly pitchCrosshairAccel: ClosedFloatingPointRange<number>;
    readonly yawCrosshairAccel: ClosedFloatingPointRange<number>;
}