import type { Trigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/Trigger.d.ts'
/**
 * Same as block change, but it will run even earlier but just for blocks that are broken client side.
 * If you use packet mine in normal mode, make sure to enable ClientSideSet in order to make this work properly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ClientBlockBreakTrigger.kt:29}
 */
export class ClientBlockBreakTrigger extends Trigger {
    static INSTANCE: ClientBlockBreakTrigger;
    clientBreakHandler(): void;
}