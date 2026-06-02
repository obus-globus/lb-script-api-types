import type { RenderPipeline } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { TextRenderable$Styled } from '../../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { BakedSheetGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BakedSheetGlyph$GlyphInstance extends Record implements TextRenderable$Styled {
    // private boldOffset: number;
    // private color: number;
    // private glyph: BakedSheetGlyph;
    // private shadowColor: number;
    // private shadowOffset: number;
    // private style: Style;
    // private x: number;
    // private y: number;
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeRight(): number;
    activeTop(): number;
    boldOffset(): number;
    bottom(): number;
    color(): number;
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
    style(): Style;
    textureView(): GpuTextureView;
    toString(): string;
    top(): number;
    x(): number;
    y(): number;
}