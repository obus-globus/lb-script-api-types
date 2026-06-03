import type { Font } from '../../../java/awt/Font.d.ts'
import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { FontRenderContext } from '../../../java/awt/font/FontRenderContext.d.ts'
import type { GlyphJustificationInfo } from '../../../java/awt/font/GlyphJustificationInfo.d.ts'
import type { GlyphMetrics } from '../../../java/awt/font/GlyphMetrics.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class GlyphVector extends Object implements Cloneable {
    static FLAG_COMPLEX_GLYPHS: number;
    static FLAG_HAS_POSITION_ADJUSTMENTS: number;
    static FLAG_HAS_TRANSFORMS: number;
    static FLAG_MASK: number;
    static FLAG_RUN_RTL: number;
    constructor()
    protected clone(): Object;
    equals(arg0: GlyphVector): boolean;
    equals(other: Object | null): boolean;
    getFont(): Font;
    getFontRenderContext(): FontRenderContext;
    getGlyphCharIndex(arg0: number): number;
    getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
    getGlyphCode(arg0: number): number;
    getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
    getGlyphJustificationInfo(arg0: number): GlyphJustificationInfo;
    getGlyphLogicalBounds(arg0: number): Shape;
    getGlyphMetrics(arg0: number): GlyphMetrics;
    getGlyphOutline(arg0: number): Shape;
    getGlyphOutline(arg0: number, arg1: number, arg2: number): Shape;
    getGlyphPixelBounds(arg0: number, arg1: FontRenderContext, arg2: number, arg3: number): Rectangle;
    getGlyphPosition(arg0: number): Point2D;
    getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
    getGlyphTransform(arg0: number): AffineTransform;
    getGlyphVisualBounds(arg0: number): Shape;
    getLayoutFlags(): number;
    getLogicalBounds(): Rectangle2D;
    getNumGlyphs(): number;
    getOutline(): Shape;
    getOutline(arg0: number, arg1: number): Shape;
    getPixelBounds(arg0: FontRenderContext, arg1: number, arg2: number): Rectangle;
    getVisualBounds(): Rectangle2D;
    performDefaultLayout(): void;
    setGlyphPosition(arg0: number, arg1: Point2D): void;
    setGlyphTransform(arg0: number, arg1: AffineTransform): void;
}