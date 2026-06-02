import type { GlyphInfo } from '../../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderable$Styled } from '../../../../../../net/minecraft/client/gui/font/TextRenderable$Styled.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
export interface BakedGlyph extends Object{
    createGlyph(x: number, y: number, color: number, shadowColor: number, style: Style, boldOffset: number, shadowOffset: number): TextRenderable$Styled;
    info(): GlyphInfo;
}