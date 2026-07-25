import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * Bypass Grim 2.3.48 anti-cheat
 * Tested on eu.loyisa.cn
 *
 * https://github.com/GrimAnticheat/Grim/issues/1296
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt:69}
 */
export class ModuleFastBreak$AbortAnother extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFastBreak$AbortAnother;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
}