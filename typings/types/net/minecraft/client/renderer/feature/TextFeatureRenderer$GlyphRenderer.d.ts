import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { Font$GlyphVisitor } from '../../../../../net/minecraft/client/gui/Font$GlyphVisitor.d.ts'
import type { EmptyArea } from '../../../../../net/minecraft/client/gui/font/EmptyArea.d.ts'
import type { TextRenderable } from '../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { TextRenderable$Styled } from '../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { TextFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/TextFeatureRenderer.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class TextFeatureRenderer$GlyphRenderer extends Object implements Font$GlyphVisitor {
    private constructor(null_: TextFeatureRenderer)
    // private displayMode: Font$DisplayMode;
    // private immediatelyFast$lastRenderType: RenderType;
    // private immediatelyFast$lastVertexConsumer: VertexConsumer;
    // private lightCoords: number;
    // private pose: Matrix4f;
    acceptEffect(effect: TextRenderable): void;
    acceptEmptyArea(empty: EmptyArea): void;
    acceptGlyph(glyph: TextRenderable$Styled): void;
    acceptRenderable(renderable: TextRenderable): void;
}