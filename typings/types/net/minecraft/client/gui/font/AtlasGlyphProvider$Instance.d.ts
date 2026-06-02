import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { GlyphRenderTypes } from '../../../../../net/minecraft/client/gui/font/GlyphRenderTypes.d.ts'
import type { PlainTextRenderable } from '../../../../../net/minecraft/client/gui/font/PlainTextRenderable.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class AtlasGlyphProvider$Instance extends Record implements PlainTextRenderable {
    static DEFAULT_HEIGHT: number;
    static DEFAULT_WIDTH: number;
    static DEFUAULT_ASCENT: number;
    // private color: number;
    // private renderTypes: GlyphRenderTypes;
    // private shadowColor: number;
    // private shadowOffset: number;
    // private sprite: TextureAtlasSprite;
    // private style: Style;
    // private textureView: GpuTextureView;
    // private x: number;
    // private y: number;
    ascent(): number;
    bottom(): number;
    color(): number;
    equals(o: Object | null): boolean;
    guiPipeline(): RenderPipeline;
    hashCode(): number;
    height(): number;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderSprite(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, offsetX: number, offsetY: number, z: number, color: number): void;
    renderType(displayMode: Font$DisplayMode): RenderType;
    renderTypes(): GlyphRenderTypes;
    right(): number;
    shadowColor(): number;
    shadowOffset(): number;
    sprite(): TextureAtlasSprite;
    style(): Style;
    textureView(): GpuTextureView;
    toString(): string;
    top(): number;
    width(): number;
    x(): number;
    y(): number;
}