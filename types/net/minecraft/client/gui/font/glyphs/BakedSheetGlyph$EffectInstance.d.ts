import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { TextRenderable } from '../../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { BakedSheetGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BakedSheetGlyph$EffectInstance extends Record implements TextRenderable {
    // private color: number;
    // private depth: number;
    // private glyph: BakedSheetGlyph;
    // private shadowColor: number;
    // private shadowOffset: number;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bottom(): number;
    color(): number;
    depth(): number;
    equals(o: Object | null): boolean;
    glyph(): BakedSheetGlyph;
    guiPipeline(): RenderPipeline;
    // private hasShadow(): boolean;
    hashCode(): number;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderType(displayMode: Font$DisplayMode): RenderType;
    right(): number;
    shadowColor(): number;
    shadowOffset(): number;
    textureView(): GpuTextureView;
    toString(): string;
    top(): number;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}