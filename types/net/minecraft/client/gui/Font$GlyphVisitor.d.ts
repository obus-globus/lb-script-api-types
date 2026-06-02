import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmptyArea } from '../../../../net/minecraft/client/gui/font/EmptyArea.d.ts'
import type { TextRenderable } from '../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { TextRenderable$Styled } from '../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
export interface Font$GlyphVisitor extends Object{
    acceptEffect(effect: TextRenderable): void;
    acceptEmptyArea(empty: EmptyArea): void;
    acceptGlyph(glyph: TextRenderable$Styled): void;
}