import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ScaffoldAccelerationFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldAccelerationFeature;
    // private onlyOnGround: boolean;
    // private /*not mapped: */ getOnlyOnGround(): boolean;
    // private speedMultiplier: number;
    // private /*not mapped: */ getSpeedMultiplier(): number;
    readonly stateUpdateHandler: EventHook<GameTickEvent>;
}