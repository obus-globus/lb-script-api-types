import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Entrance requires the target block to have an entrance. It does not matter if we can see it or not.
 * If this condition is true, it will override the wall range to range
 * and act as if we were breaking normally.
 *
 * Useful for Hypixel and CubeCraft
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:97}
 */
export class ModuleFucker$FuckerEntrance extends ToggleableValueGroup {
    static INSTANCE: ModuleFucker$FuckerEntrance;
    /**
     * Breaks the weakest block around target block and makes an entrance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:101}
     */
    readonly breakFree: boolean;
}