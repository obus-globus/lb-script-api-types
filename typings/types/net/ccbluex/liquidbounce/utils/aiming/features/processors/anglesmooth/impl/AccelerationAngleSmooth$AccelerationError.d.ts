import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AccelerationAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth.d.ts'
export class AccelerationAngleSmooth$AccelerationError extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth)
    readonly pitchAccelerationError: number;
    readonly yawAccelerationError: number;
}