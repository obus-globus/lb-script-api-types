import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { VelocityIntave$JumpReset } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityIntave$JumpReset.d.ts'
export class VelocityIntave$JumpReset$Randomize extends ToggleableValueGroup {
    constructor(null_: VelocityIntave$JumpReset)
    readonly delayTicks: { start: number; endInclusive: number; step: number };
}