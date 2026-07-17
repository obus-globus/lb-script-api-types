import type { Mode } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
export class FlyFireballCustomTechnique extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyFireballCustomTechnique;
    canMove: boolean;
    // private disableDelay: number;
    // private /*not mapped: */ getDisableDelay(): number;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    readonly playerMoveHandler: EventHook<PlayerMoveEvent>;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    readonly sprint: boolean;
    readonly stopMove: boolean;
    // private throwDelay: number;
    // private /*not mapped: */ getThrowDelay(): number;
}