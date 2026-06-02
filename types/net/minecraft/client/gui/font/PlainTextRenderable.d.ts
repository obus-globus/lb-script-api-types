import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextRenderable$Styled } from '../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export interface PlainTextRenderable extends Object, TextRenderable$Styled{
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeTop(): number;
    ascent(): number;
    bottom(): number;
    color(): number;
    height(): number;
    left(): number;
    render(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, flat: boolean): void;
    renderSprite(pose: Matrix4fc, buffer: VertexConsumer, packedLightCoords: number, offsetX: number, offsetY: number, z: number, color: number): void;
    right(): number;
    shadowColor(): number;
    shadowOffset(): number;
    top(): number;
    width(): number;
    x(): number;
    y(): number;
}