import type { Font } from '../../../java/awt/Font.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
import type { Font2D } from '../../../sun/font/Font2D.d.ts'
import type { FontStrike } from '../../../sun/font/FontStrike.d.ts'
export class FontInfo extends Object implements Cloneable {
    constructor()
    aaHint: number;
    devTx: number[];
    font: Font;
    font2D: Font2D;
    fontStrike: FontStrike;
    glyphTx: number[];
    lcdRGBOrder: boolean;
    lcdSubPixPos: boolean;
    nonInvertibleTx: boolean;
    originX: number;
    originY: number;
    pixelHeight: number;
    clone(): Object;
    mtx(arg0: number[]): string;
    toString(): string;
}