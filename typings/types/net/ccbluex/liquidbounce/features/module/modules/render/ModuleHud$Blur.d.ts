import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleHud$Blur extends ToggleableValueGroup {
    static INSTANCE: ModuleHud$Blur;
    /**
     * The range in which the blending from not-blurred to blurred occurs.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:109}
     */
    readonly alphaBlendRange: ClosedFloatingPointRange<number>;
    /**
     * Gaussian sigma controlling blur strength. Higher values produce stronger blur.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:104}
     */
    readonly sigma: number;
}