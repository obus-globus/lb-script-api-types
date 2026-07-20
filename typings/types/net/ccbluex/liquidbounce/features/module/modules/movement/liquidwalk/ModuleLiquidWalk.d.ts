import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * LiquidWalk module
 *
 * Allows you to walk on water like jesus. Also known as Jesus module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt:37}
 */
export class ModuleLiquidWalk extends ClientModule {
    static INSTANCE: ModuleLiquidWalk;
    // private modes: ModeValueGroup<Mode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<Mode>;
    collidesWithAnythingElse(): boolean;
    /**
     * Check if player is standing on water
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/ModuleLiquidWalk.kt:53}
     */
    standingOnWater(): boolean;
}