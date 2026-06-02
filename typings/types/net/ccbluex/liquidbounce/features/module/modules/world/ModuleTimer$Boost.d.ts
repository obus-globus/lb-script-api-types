import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class ModuleTimer$Boost extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleTimer$Boost;
    // private accountTimerValue: boolean;
    // private /*not mapped: */ getAccountTimerValue(): boolean;
    // private allowNegative: boolean;
    // private /*not mapped: */ getAllowNegative(): boolean;
    // private boostCapable: number;
    // private boostSpeed: number;
    // private /*not mapped: */ getBoostSpeed(): number;
    // private normalizeDuringCombat: boolean;
    // private /*not mapped: */ getNormalizeDuringCombat(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private slowSpeed: number;
    // private /*not mapped: */ getSlowSpeed(): number;
    // private timeBoostTicks: number;
    // private /*not mapped: */ getTimeBoostTicks(): number;
}