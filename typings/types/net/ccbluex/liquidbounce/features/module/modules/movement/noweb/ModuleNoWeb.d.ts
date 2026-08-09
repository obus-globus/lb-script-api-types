import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NoWebMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/noweb/NoWebMode.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * NoWeb module
 *
 * Disables web slowdown.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt:41}
 */
export class ModuleNoWeb extends ClientModule {
    static INSTANCE: ModuleNoWeb;
    readonly modes: ModeValueGroup<NoWebMode>;
    getModes(): ModeValueGroup<NoWebMode>;
    // private tickHandler: EventHook<GameTickEvent>;
    /**
     * Handle cobweb collision
     *
     * @returns if we should cancel the slowdown effect
     * @see WebBlock.entityInside
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt:72}
     */
    handleEntityCollision(pos: BlockPos): boolean;
}