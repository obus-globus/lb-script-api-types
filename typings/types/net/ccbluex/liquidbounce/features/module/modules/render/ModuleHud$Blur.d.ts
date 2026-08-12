import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class ModuleHud$Blur extends ToggleableValueGroup {
    static INSTANCE: ModuleHud$Blur;
    /**
     * The range in which the blending from not-blurred to blurred occurs.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L109 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:109}
     */
    readonly alphaBlendRange: ClosedFloatingPointRange<number>;
    /**
     * Gaussian sigma controlling blur strength. Higher values produce stronger blur.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleHud.kt:104}
     */
    readonly sigma: number;
}