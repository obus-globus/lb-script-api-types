import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Verus (b3901 and b3896)
 * - **Tested on:** anticheat-test.com and eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVerusB3901.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVerusB3901.kt:37}
 */
export class LiquidWalkVerusB3901 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: LiquidWalkVerusB3901;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
    readonly shapeHandler: EventHook<BlockShapeEvent>;
    // private spoof: boolean;
}