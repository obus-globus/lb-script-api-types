import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ScaffoldStrafeFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldStrafeFeature;
    // private hypixel: boolean;
    // private /*not mapped: */ getHypixel(): boolean;
    // private moveTickHandler: EventHook<GameTickEvent>;
    // private moveTicks: number;
    // private onlyOnGround: boolean;
    // private /*not mapped: */ getOnlyOnGround(): boolean;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private strafeHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
    onEnabled(): void;
}