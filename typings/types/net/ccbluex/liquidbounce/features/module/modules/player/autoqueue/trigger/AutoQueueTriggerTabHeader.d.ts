import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
/**
 * Can be used for different server that use paper to join a game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerTabHeader.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerTabHeader.kt:25}
 */
export class AutoQueueTriggerTabHeader extends AutoQueueTrigger {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueTriggerTabHeader;
    /*not mapped: */ isTriggered(): boolean;
    // private text: string;
    // private /*not mapped: */ getText(): string;
}