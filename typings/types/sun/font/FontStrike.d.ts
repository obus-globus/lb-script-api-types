import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { GeneralPath } from '../../java/awt/geom/GeneralPath.d.ts'
import type { Point2D$Float } from '../../java/awt/geom/Point2D$Float.d.ts'
import type { Rectangle2D$Float } from '../../java/awt/geom/Rectangle2D$Float.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { FontStrikeDesc } from '../../sun/font/FontStrikeDesc.d.ts'
import type { FontStrikeDisposer } from '../../sun/font/FontStrikeDisposer.d.ts'
import type { StrikeMetrics } from '../../sun/font/StrikeMetrics.d.ts'
export abstract class FontStrike extends Object {
    constructor()
    // private algoStyle: boolean;
    // private boldness: number;
    // private desc: FontStrikeDesc;
    // private disposer: FontStrikeDisposer;
    // private italic: number;
    // private strikeMetrics: StrikeMetrics;
    getCharMetrics(arg0: string): Point2D$Float;
    getCodePointAdvance(arg0: number): number;
    getFontMetrics(): StrikeMetrics;
    getGlyphAdvance(arg0: number): number;
    getGlyphImageBounds(arg0: number, arg1: Point2D$Float, arg2: Rectangle): void;
    getGlyphImagePtr(arg0: number): number;
    getGlyphImagePtrs(arg0: number[], arg1: number[], arg2: number): void;
    getGlyphMetrics(arg0: number): Point2D$Float;
    getGlyphOutline(arg0: number, arg1: number, arg2: number): GeneralPath;
    getGlyphOutlineBounds(arg0: number): Rectangle2D$Float;
    getGlyphVectorOutline(arg0: number[], arg1: number, arg2: number): GeneralPath;
    getNumGlyphs(): number;
}