import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Vulcan (2.8.9)
 * - **Tested on:** anticheat-test.com, eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/VulcanLongJump.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/longjump/modes/VulcanLongJump.kt:33}
 */
export class VulcanLongJump extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: VulcanLongJump;
    // private jumpingSequence: number[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Object>;
    // private receivedSetback: boolean;
    // private repeatable: EventHook<GameTickEvent>;
    // private started: boolean;
    enable(): void;
}