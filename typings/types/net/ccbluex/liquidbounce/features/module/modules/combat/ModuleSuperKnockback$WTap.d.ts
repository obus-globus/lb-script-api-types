import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
export class ModuleSuperKnockback$WTap extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleSuperKnockback$WTap;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private cancelMovement: boolean;
    // private inSequence: boolean;
    // private movementHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private ticksUntilAllowedMovement: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getTicksUntilAllowedMovement(): { start: number; endInclusive: number; step: number };
    // private ticksUntilMovementBlock: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getTicksUntilMovementBlock(): { start: number; endInclusive: number; step: number };
    disable(): void;
}