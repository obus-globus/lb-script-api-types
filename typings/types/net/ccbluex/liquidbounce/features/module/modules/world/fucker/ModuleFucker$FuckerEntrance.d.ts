import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Entrance requires the target block to have an entrance. It does not matter if we can see it or not.
 * If this condition is true, it will override the wall range to range
 * and act as if we were breaking normally.
 *
 * Useful for Hypixel and CubeCraft
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:102}
 */
export class ModuleFucker$FuckerEntrance extends ToggleableValueGroup {
    static INSTANCE: ModuleFucker$FuckerEntrance;
    /**
     * Breaks the weakest block around target block and makes an entrance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:106}
     */
    readonly breakFree: boolean;
}