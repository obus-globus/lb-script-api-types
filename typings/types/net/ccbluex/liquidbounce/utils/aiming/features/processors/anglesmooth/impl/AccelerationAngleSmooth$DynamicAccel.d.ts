import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AccelerationAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth.d.ts'
export class AccelerationAngleSmooth$DynamicAccel extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth)
    readonly coefDistance: number;
    readonly pitchCrosshairAccel: ClosedFloatingPointRange<number>;
    readonly yawCrosshairAccel: ClosedFloatingPointRange<number>;
}