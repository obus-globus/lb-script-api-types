import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class InstantNukerMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: InstantNukerMode;
    // private bps: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getBps(): { start: number; endInclusive: number; step: number };
    // private doNotStop: boolean;
    // private /*not mapped: */ getDoNotStop(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}