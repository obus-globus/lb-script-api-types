import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
import type { SingleItemStackPickMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/SingleItemStackPickMode.d.ts'
/**
 * Can be used for different server that use paper to join a game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerItem.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerItem.kt:26}
 */
export class AutoQueueTriggerItem extends AutoQueueTrigger {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueTriggerItem;
    /*not mapped: */ isTriggered(): boolean;
    // private mode: ModeValueGroup<SingleItemStackPickMode>;
}