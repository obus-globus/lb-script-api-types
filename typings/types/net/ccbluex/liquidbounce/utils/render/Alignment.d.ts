import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { BoundingBox2f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { Alignment$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/render/Alignment$Companion.d.ts'
import type { Alignment$ScreenAxisX } from '../../../../../net/ccbluex/liquidbounce/utils/render/Alignment$ScreenAxisX.d.ts'
import type { Alignment$ScreenAxisY } from '../../../../../net/ccbluex/liquidbounce/utils/render/Alignment$ScreenAxisY.d.ts'
export class Alignment extends ValueGroup {
    static Companion: Alignment$Companion;
    static center(): Alignment;
    constructor(horizontalAlignment: Alignment$ScreenAxisX, horizontalOffset: number, verticalAlignment: Alignment$ScreenAxisY, verticalOffset: number)
    readonly guiScaledHorizontalOffset: number;
    readonly guiScaledVerticalOffset: number;
    readonly horizontalAlignment: Alignment$ScreenAxisX;
    readonly horizontalOffset: number;
    readonly verticalAlignment: Alignment$ScreenAxisY;
    readonly verticalOffset: number;
    /**
     * @returns Scaled bounds follows {@link com.mojang.blaze3d.platform.Window.guiScale}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/Alignment.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/Alignment.kt:64}
     */
    getBounds(width: number, height: number): BoundingBox2f;
    setFrom(other: Alignment): void;
}