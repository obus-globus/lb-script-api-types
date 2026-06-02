import type { Graphics2D } from '../../../java/awt/Graphics2D.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { GlyphJustificationInfo } from '../../../java/awt/font/GlyphJustificationInfo.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class GraphicAttribute extends Object {
    static BOTTOM_ALIGNMENT: number;
    static CENTER_BASELINE: number;
    static HANGING_BASELINE: number;
    static ROMAN_BASELINE: number;
    static TOP_ALIGNMENT: number;
    constructor(arg0: number)
    // private fAlignment: number;
    draw(arg0: Graphics2D, arg1: number, arg2: number): void;
    getAdvance(): number;
    getAlignment(): number;
    getAscent(): number;
    getBounds(): Rectangle2D;
    getDescent(): number;
    getJustificationInfo(): GlyphJustificationInfo;
    getOutline(arg0: AffineTransform): Shape;
}