import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
/**
 * Cancel network communication
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L188 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:188}
 */
export class ModuleFreeze$Cancel extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFreeze$Cancel;
    // private origin: TransferOrigin[];
    // private /*not mapped: */ getOrigin(): TransferOrigin[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
}