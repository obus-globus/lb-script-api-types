import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class VelocityJumpReset$JumpByDelay extends ToggleableValueGroup {
    static INSTANCE: VelocityJumpReset$JumpByDelay;
    readonly ticksUntilJump: { start: number; endInclusive: number; step: number };
}