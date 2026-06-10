import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { Float2IntFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiCircleLutAtlas$Allocation } from '../../../../../net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas$Allocation.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
/**
 * Shared LUT atlas used by GUI circle shader rendering.
 *
 * Each requested circle writes one row of angle->color values into a {@link DynamicTexture}.
 * The shader then samples that row by index to reproduce the caller-provided {@link Float2IntFunction}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt:32}
 */
export class GuiCircleLutAtlas extends Object {
    static INSTANCE: GuiCircleLutAtlas;
    // private INITIAL_ROWS: number;
    // private LUT_WIDTH: number;
    // private nextRow: number;
    // private pixels: NativeImage;
    // private rows: number;
    // private sampler: GpuSampler;
    // private texture: DynamicTexture;
    // private textureSetup: TextureSetup;
    /**
     * Allocates one LUT row and uploads colors produced by {@link colorGetter}.
     *
     * {@link colorGetter} receives angle in radians in range `[0, 2π)`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt:66}
     */
    allocate(colorGetter: (param0: number) => number): GuiCircleLutAtlas$Allocation;
    // private growRows(minRows: number): void;
    /**
     * Resets row allocation cursor for the next GUI draw pass.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/GuiCircleLutAtlas.kt:86}
     */
    resetForNextDraw(): void;
}