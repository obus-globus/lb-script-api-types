import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { Font$GlyphVisitor } from '../../../../net/minecraft/client/gui/Font$GlyphVisitor.d.ts'
import type { Font$PreparedText } from '../../../../net/minecraft/client/gui/Font$PreparedText.d.ts'
import type { EmptyArea } from '../../../../net/minecraft/client/gui/font/EmptyArea.d.ts'
import type { TextRenderable } from '../../../../net/minecraft/client/gui/font/TextRenderable.d.ts'
import type { TextRenderable$Styled } from '../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { BakedGlyph } from '../../../../net/minecraft/client/gui/font/glyphs/BakedGlyph.d.ts'
import type { ScreenRectangle } from '../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { TextColor } from '../../../../net/minecraft/network/chat/TextColor.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class Font$PreparedTextBuilder extends Object implements Font$PreparedText, FormattedCharSink {
    constructor(null_: Font, x: number, y: number, color: number, drawShadow: boolean, includeEmpty: boolean)
    constructor(null_: Font, x: number, y: number, color: number, backgroundColor: number, drawShadow: boolean, includeEmpty: boolean)
    // private backgroundBottom: number;
    // private backgroundColor: number;
    // private backgroundLeft: number;
    // private backgroundRight: number;
    // private backgroundTop: number;
    // private bottom: number;
    // private color: number;
    // private drawShadow: boolean;
    // private effects: TextRenderable[];
    // private emptyAreas: EmptyArea[];
    // private glyphs: TextRenderable$Styled[];
    // private includeEmpty: boolean;
    // private left: number;
    // private right: number;
    // private top: number;
    // private x: number;
    // private y: number;
    accept(position: number, style: Style, c: number): boolean;
    accept(position: number, style: Style, glyph: BakedGlyph): boolean;
    // private addEffect(effect: TextRenderable): void;
    // private addEmptyGlyph(empty: EmptyArea): void;
    // private addGlyph(instance: TextRenderable$Styled): void;
    bounds(): ScreenRectangle;
    discardEffects(): void;
    // private getShadowColor(style: Style, textColor: number): number;
    // private getTextColor(textColor: TextColor): number;
    // private markBackground(x: number, y: number, advance: number): void;
    // private markSize(left: number, top: number, right: number, bottom: number): void;
    visit(visitor: Font$GlyphVisitor): void;
}