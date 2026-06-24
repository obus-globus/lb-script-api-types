import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * LiquidWalk module
 *
 * Allows you to walk on water like jesus. Also known as Jesus module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt:32}
 */
export class ModuleLiquidWalk extends ClientModule {
    static INSTANCE: ModuleLiquidWalk;
    // private modes: ModeValueGroup<Mode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<Mode>;
    collidesWithAnythingElse(): boolean;
    /**
     * Check if player is standing on water
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt:50}
     */
    standingOnWater(): boolean;
}