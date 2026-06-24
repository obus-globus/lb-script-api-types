import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AccelerationAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/AccelerationAngleSmooth.d.ts'
export class AccelerationAngleSmooth$ConstantError extends ToggleableValueGroup {
    constructor(null_: AccelerationAngleSmooth)
    readonly pitchConstantError: number;
    readonly yawConstantError: number;
}