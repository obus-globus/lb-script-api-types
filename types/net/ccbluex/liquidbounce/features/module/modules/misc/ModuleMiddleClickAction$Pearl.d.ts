import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
export class ModuleMiddleClickAction$Pearl extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleMiddleClickAction$Pearl;
    // private handler: EventHook<WorldChangeEvent>;
    readonly parent: ModeValueGroup<Object>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private slotResetDelay: number;
    // private /*not mapped: */ getSlotResetDelay(): number;
    // private stopOnSubmit: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getStopOnSubmit(): ClosedFloatingPointRange<number>;
    // private wasPressed: boolean;
    cancelPick(): boolean;
    disable(): void;
}