import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Entrance requires the target block to have an entrance. It does not matter if we can see it or not.
 * If this condition is true, it will override the wall range to range
 * and act as if we were breaking normally.
 *
 * Useful for Hypixel and CubeCraft
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:90}
 */
export class ModuleFucker$FuckerEntrance extends ToggleableValueGroup {
    static INSTANCE: ModuleFucker$FuckerEntrance;
    /**
     * Breaks the weakest block around target block and makes an entrance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker.kt:98}
     */
    readonly breakFree: boolean;
}