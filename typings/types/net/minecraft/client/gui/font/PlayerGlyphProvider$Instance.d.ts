import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { PlainTextRenderable } from '../../../../../net/minecraft/client/gui/font/PlainTextRenderable.d.ts'
import type { PlayerSkinRenderCache$RenderInfo } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache$RenderInfo.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class PlayerGlyphProvider$Instance extends Record implements PlainTextRenderable {
    static DEFAULT_HEIGHT: number;
    static DEFAULT_WIDTH: number;
    static DEFUAULT_ASCENT: number;
    private constructor(skin: () => PlayerSkinRenderCache$RenderInfo, hat: boolean, x: number, y: number, color: number, shadowColor: number, shadowOffset: number, style: Style)
    // private color: number;
    // private hat: boolean;
    // private shadowColor: number;
    // private shadowOffset: number;
    // private skin: () => PlayerSkinRenderCache$RenderInfo;
    // private style: Style;
    // private x: number;
    // private y: number;
    ascent(): number;
    bottom(): number;
    color(): number;
    equals(o: Object | null): boolean;
    guiPipeline(): RenderPipeline;
    hashCode(): number;
    hat(): boolean;
    height(): number;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderSprite(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, offsetX: number, offsetY: number, z: number, color: number): void;
    renderType(displayMode: Font$DisplayMode): RenderType;
    right(): number;
    shadowColor(): number;
    shadowOffset(): number;
    skin(): () => PlayerSkinRenderCache$RenderInfo;
    style(): Style;
    textureView(): GpuTextureView;
    toString(): string;
    top(): number;
    width(): number;
    x(): number;
    y(): number;
}