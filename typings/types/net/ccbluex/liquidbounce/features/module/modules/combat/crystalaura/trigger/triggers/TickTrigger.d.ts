import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { Trigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
/**
 * Runs placing and destroying every tick.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/TickTrigger.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/TickTrigger.kt:34}
 */
export class TickTrigger extends Trigger {
    static INSTANCE: TickTrigger;
    readonly allowsCaching: boolean;
    // private simulatedTickHandler: EventHook<RotationUpdateEvent>;
}