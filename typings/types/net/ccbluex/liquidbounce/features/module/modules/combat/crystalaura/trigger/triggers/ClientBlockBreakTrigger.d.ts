import type { Trigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
/**
 * Same as block change, but it will run even earlier but just for blocks that are broken client side.
 * If you use packet mine in normal mode, make sure to enable ClientSideSet in order to make this work properly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt:29}
 */
export class ClientBlockBreakTrigger extends Trigger {
    static INSTANCE: ClientBlockBreakTrigger;
    clientBreakHandler(): void;
}