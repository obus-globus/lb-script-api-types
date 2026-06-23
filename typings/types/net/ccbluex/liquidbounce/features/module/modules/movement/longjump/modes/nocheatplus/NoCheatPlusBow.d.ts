import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { KeybindIsPressedEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/KeybindIsPressedEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * @remarks
 * - **Anticheat:** NoCheatPlus (3.16.1-SNAPSHOT-sMD5NET-b115s)
 * - **Tested on:** eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/nocheatplus/NoCheatPlusBow.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/nocheatplus/NoCheatPlusBow.kt:39}
 */
export class NoCheatPlusBow extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoCheatPlusBow;
    // private arrowBoost: number;
    // private arrowsToShoot: number;
    // private /*not mapped: */ getArrowsToShoot(): number;
    // private charged: number;
    // private /*not mapped: */ getCharged(): number;
    readonly fallDistance: number;
    // private forceUseKey: boolean;
    // private handleMovementInput: EventHook<MovementInputEvent>;
    // private keyBindIsPressedHandler: EventHook<KeybindIsPressedEvent>;
    readonly movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<any>;
    readonly rotations: RotationsValueGroup;
    // private shotArrows: number;
    readonly speed: number;
    // private stopMovement: boolean;
    // private tickJumpHandler: EventHook<GameTickEvent>;
    // private velocityHandler: EventHook<PacketEvent>;
    disable(): void;
}