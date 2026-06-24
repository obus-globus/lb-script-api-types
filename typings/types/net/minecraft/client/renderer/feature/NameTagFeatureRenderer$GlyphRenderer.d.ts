import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { Font$GlyphVisitor } from '../../../../../net/minecraft/client/gui/Font$GlyphVisitor.d.ts'
import type { EmptyArea } from '../../../../../net/minecraft/client/gui/font/EmptyArea.d.ts'
import type { TextRenderable } from '../../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { TextRenderable$Styled } from '../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { NameTagFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/NameTagFeatureRenderer.d.ts'
import type { NameTagFeatureRenderer$Submit } from '../../../../../net/minecraft/client/renderer/feature/NameTagFeatureRenderer$Submit.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class NameTagFeatureRenderer$GlyphRenderer extends Object implements Font$GlyphVisitor {
    private constructor(null_: NameTagFeatureRenderer)
    // private displayMode: Font$DisplayMode;
    // private lightCoords: number;
    // private pose: Matrix4f;
    acceptEffect(effect: TextRenderable): void;
    acceptEmptyArea(empty: EmptyArea): void;
    acceptGlyph(glyph: TextRenderable$Styled): void;
    acceptRenderable(renderable: TextRenderable): void;
    prepare(submit: NameTagFeatureRenderer$Submit, displayMode: Font$DisplayMode): void;
}