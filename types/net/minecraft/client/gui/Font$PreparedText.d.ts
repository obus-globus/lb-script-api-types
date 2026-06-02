import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font$GlyphVisitor } from '../../../../net/minecraft/client/gui/Font$GlyphVisitor.d.ts'
import type { ScreenRectangle } from '../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export interface Font$PreparedText extends Object{
    bounds(): ScreenRectangle;
    visit(visitor: Font$GlyphVisitor): void;
}