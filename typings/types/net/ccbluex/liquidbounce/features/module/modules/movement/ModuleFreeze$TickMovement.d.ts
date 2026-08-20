import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMovementTickEvent.d.ts'
export class ModuleFreeze$TickMovement extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFreeze$TickMovement;
    // private interval: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getInterval(): { start: number; endInclusive: number; step: number };
    // private movementTickHandler: EventHook<PlayerMovementTickEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private ticksUntilMovement: number;
    disable(): void;
    enable(): void;
}