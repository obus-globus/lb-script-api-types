import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { SprintEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
/**
 * extensive blocksmc speed
 * @author liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/blocksmc/SpeedBlocksMC.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/blocksmc/SpeedBlocksMC.kt:45}
 */
export class SpeedBlocksMC extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private flagDelay: number;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private roundStrafeYaw: boolean;
    // private /*not mapped: */ getRoundStrafeYaw(): boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    // private state: number;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
    enable(): void;
}