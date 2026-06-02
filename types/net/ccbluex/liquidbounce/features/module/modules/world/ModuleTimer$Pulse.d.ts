import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleTimer$Pulse$TimerState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer$Pulse$TimerState.d.ts'
export class ModuleTimer$Pulse extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleTimer$Pulse;
    // private boostSpeed: number;
    // private /*not mapped: */ getBoostSpeed(): number;
    // private boostSpeedTicks: number;
    // private /*not mapped: */ getBoostSpeedTicks(): number;
    // private currentState: ModuleTimer$Pulse$TimerState;
    // private normalSpeed: number;
    // private /*not mapped: */ getNormalSpeed(): number;
    // private normalSpeedTicks: number;
    // private /*not mapped: */ getNormalSpeedTicks(): number;
    // private onMove: boolean;
    // private /*not mapped: */ getOnMove(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    enable(): void;
}