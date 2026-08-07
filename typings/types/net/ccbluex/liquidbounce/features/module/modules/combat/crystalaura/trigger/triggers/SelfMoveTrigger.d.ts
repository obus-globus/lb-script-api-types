import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { Trigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
/**
 * Runs placing when you move.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/SelfMoveTrigger.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/SelfMoveTrigger.kt:34}
 */
export class SelfMoveTrigger extends Trigger {
    static INSTANCE: SelfMoveTrigger;
    // private packetListener: EventHook<PacketEvent>;
}