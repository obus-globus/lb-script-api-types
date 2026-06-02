import type { Trigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
/**
 * Same as block change, but it will run even earlier but just for blocks that are broken client side.
 * If you use packet mine in normal mode, make sure to enable ClientSideSet in order to make this work properly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt:25}
 */
export class ClientBlockBreakTrigger extends Trigger {
    static INSTANCE: ClientBlockBreakTrigger;
    clientBreakHandler(): void;
}