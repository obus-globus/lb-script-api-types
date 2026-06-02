import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class VelocityJumpReset$JumpByReceivedHits extends ToggleableValueGroup {
    static INSTANCE: VelocityJumpReset$JumpByReceivedHits;
    readonly hitsUntilJump: { start: number; endInclusive: number; step: number };
}