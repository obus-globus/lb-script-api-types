import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ScaffoldHeadHitterFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldHeadHitterFeature;
    // private jumpCooldown: number;
    // private jumpDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getJumpDelay(): { start: number; endInclusive: number; step: number };
    readonly repeatable: EventHook<GameTickEvent>;
    // private canHeadHit(): boolean;
}