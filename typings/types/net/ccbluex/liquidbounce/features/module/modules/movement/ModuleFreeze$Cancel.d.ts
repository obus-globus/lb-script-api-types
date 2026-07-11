import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
/**
 * Cancel network communication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L188 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:188}
 */
export class ModuleFreeze$Cancel extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFreeze$Cancel;
    // private origin: TransferOrigin[];
    // private /*not mapped: */ getOrigin(): TransferOrigin[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
}