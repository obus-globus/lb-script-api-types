import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * Spider Bypass for Vulcan 2.8.8
 *
 * Sneaking seems to reduce flags a bit for some reason.
 *
 * @anticheat Vulcan 2.8.8
 * @testedOn eu.loyisa.cn
 *
 * @see net.ccbluex.liquidbounce.features.module.modules.movement.spider.ModuleSpider

TODO: Detection for how many blocks you've gone up. Anything over 40ish seems to flag for Invalid (C)
  Proper implementation if there's something above you needs to be added.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/spider/modes/SpiderVulcan288.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/spider/modes/SpiderVulcan288.kt:39}
 */
export class SpiderVulcan288 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: SpiderVulcan288;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private requiresStop: boolean;
}