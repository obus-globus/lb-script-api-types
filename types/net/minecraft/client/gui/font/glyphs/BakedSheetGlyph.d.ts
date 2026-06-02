import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { GpuTextureView } from '../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphRenderTypes } from '../../../../../../net/minecraft/client/gui/font/GlyphRenderTypes.d.ts'
import type { TextRenderable } from '../../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { TextRenderable$Styled } from '../../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { BakedGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { BakedSheetGlyph$EffectInstance } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph$EffectInstance.d.ts'
import type { BakedSheetGlyph$GlyphInstance } from '../../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph$GlyphInstance.d.ts'
import type { EffectGlyph } from '../../../../../../net/minecraft/client/gui/font/glyphs/EffectGlyph.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class BakedSheetGlyph extends Object implements BakedGlyph, EffectGlyph {
    static Z_FIGHTER: number;
    constructor(info: GlyphInfo, renderTypes: GlyphRenderTypes, textureView: GpuTextureView, u0: number, u1: number, v0: number, v1: number, left: number, right: number, up: number, down: number)
    // private down: number;
    // private info: GlyphInfo;
    // private left: number;
    // private renderTypes: GlyphRenderTypes;
    // private right: number;
    // private textureView: GpuTextureView;
    // private u0: number;
    // private u1: number;
    // private up: number;
    // private v0: number;
    // private v1: number;
    // private bottom(instance: BakedSheetGlyph$GlyphInstance): number;
    // private buildEffect(effect: BakedSheetGlyph$EffectInstance, offset: number, z: number, color: number, buffer: VertexConsumer, packedLightCoords: number, pose: Matrix4fc): void;
    createEffect(x0: number, y0: number, x1: number, y1: number, depth: number, color: number, shadowColor: number, shadowOffset: number): TextRenderable;
    createGlyph(x: number, y: number, color: number, shadowColor: number, style: Style, boldOffset: number, shadowOffset: number): TextRenderable$Styled;
    info(): GlyphInfo;
    // private left(instance: BakedSheetGlyph$GlyphInstance): number;
    // private render(italic: boolean, x: number, y: number, z: number, pose: Matrix4fc, builder: VertexConsumer, color: number, bold: boolean, packedLightCoords: number): void;
    // private renderChar(glyphInstance: BakedSheetGlyph$GlyphInstance, pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    // private renderEffect(effect: BakedSheetGlyph$EffectInstance, pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    // private right(instance: BakedSheetGlyph$GlyphInstance): number;
    // private shearBottom(): number;
    // private shearTop(): number;
    // private top(instance: BakedSheetGlyph$GlyphInstance): number;
}