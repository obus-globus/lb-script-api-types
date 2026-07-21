import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @anticheat Vulcan
 * @anticheatVersion 2.8.9
 * @testedOn anticheat-test.com, eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/VulcanLongJump.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/VulcanLongJump.kt:38}
 */
export class VulcanLongJump extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: VulcanLongJump;
    // private jumpingSequence: number[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private receivedSetback: boolean;
    // private repeatable: EventHook<GameTickEvent>;
    // private started: boolean;
    enable(): void;
}