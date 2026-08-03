import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoQueueTrigger } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTrigger.d.ts'
/**
 * Can be used for different server that use paper to join a game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerTabFooter.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/trigger/AutoQueueTriggerTabFooter.kt:25}
 */
export class AutoQueueTriggerTabFooter extends AutoQueueTrigger {
    static Companion: Tagged$Companion;
    static INSTANCE: AutoQueueTriggerTabFooter;
    /*not mapped: */ isTriggered(): boolean;
    // private text: string;
    // private /*not mapped: */ getText(): string;
}