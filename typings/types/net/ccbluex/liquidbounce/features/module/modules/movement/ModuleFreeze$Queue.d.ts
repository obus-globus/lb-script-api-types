import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
/**
 * Queue network communication - acts as network lag
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:167}
 */
export class ModuleFreeze$Queue extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFreeze$Queue;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private origin: TransferOrigin[];
    // private /*not mapped: */ getOrigin(): TransferOrigin[];
    readonly parent: ModeValueGroup<Mode>;
}