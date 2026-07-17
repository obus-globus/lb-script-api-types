import type { Mode } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
export class FlyFireballLegitTechnique extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyFireballLegitTechnique;
    // private canMove: boolean;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private repeatable: EventHook<GameTickEvent>;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private shouldJump: boolean;
    // private sprint: boolean;
    // private /*not mapped: */ getSprint(): boolean;
    // private stopMove: boolean;
    // private /*not mapped: */ getStopMove(): boolean;
    // private invertYaw(yaw: number): number;
}