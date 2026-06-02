import type { Font } from '../../java/awt/Font.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { LineMetrics } from '../../java/awt/font/LineMetrics.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { CharacterIterator } from '../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class FontMetrics extends Object implements Serializable {
    constructor(arg0: Font)
    font: Font;
    bytesWidth(arg0: number[], arg1: number, arg2: number): number;
    charWidth(arg0: string): number;
    charWidth(arg0: number): number;
    charsWidth(arg0: string[], arg1: number, arg2: number): number;
    getAscent(): number;
    getDescent(): number;
    getFont(): Font;
    getFontRenderContext(): FontRenderContext;
    getHeight(): number;
    getLeading(): number;
    getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): LineMetrics;
    getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: Graphics): LineMetrics;
    getLineMetrics(arg0: string, arg1: Graphics): LineMetrics;
    getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: Graphics): LineMetrics;
    getMaxAdvance(): number;
    getMaxAscent(): number;
    getMaxCharBounds(arg0: Graphics): Rectangle2D;
    getMaxDecent(): number;
    getMaxDescent(): number;
    getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): Rectangle2D;
    getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: Graphics): Rectangle2D;
    getStringBounds(arg0: string, arg1: Graphics): Rectangle2D;
    getStringBounds(arg0: string, arg1: number, arg2: number, arg3: Graphics): Rectangle2D;
    getWidths(): number[];
    hasUniformLineMetrics(): boolean;
    // private myFRC(arg0: Graphics): FontRenderContext;
    stringWidth(arg0: string): number;
    toString(): string;
}