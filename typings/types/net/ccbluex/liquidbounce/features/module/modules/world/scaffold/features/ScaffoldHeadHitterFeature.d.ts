import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ScaffoldHeadHitterFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldHeadHitterFeature;
    readonly repeatable: EventHook<GameTickEvent>;
    // private canHeadHit(): boolean;
}