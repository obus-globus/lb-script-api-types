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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt:36}
 */
export class ModuleNoWeb extends ClientModule {
    static INSTANCE: ModuleNoWeb;
    readonly modes: ModeValueGroup<NoWebMode>;
    // private tickHandler: EventHook<GameTickEvent>;
    /**
     * Handle cobweb collision
     *
     * @returns if we should cancel the slowdown effect
     * @see WebBlock.entityInside
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noweb/ModuleNoWeb.kt:66}
     */
    handleEntityCollision(pos: BlockPos): boolean;
}