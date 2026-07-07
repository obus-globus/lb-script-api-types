import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockShapeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockShapeEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * @anticheat Verus
 * @anticheatVersion b3901 and b3896
 * @testedOn anticheat-test.com and eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVerusB3901.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVerusB3901.kt:42}
 */
export class LiquidWalkVerusB3901 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: LiquidWalkVerusB3901;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
    readonly shapeHandler: EventHook<BlockShapeEvent>;
    // private spoof: boolean;
}