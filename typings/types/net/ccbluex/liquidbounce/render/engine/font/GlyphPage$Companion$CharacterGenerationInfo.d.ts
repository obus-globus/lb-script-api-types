import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Point } from '../../../../../../java/awt/Point.d.ts'
import type { GlyphMetrics } from '../../../../../../java/awt/font/GlyphMetrics.d.ts'
import type { LineMetrics } from '../../../../../../java/awt/font/LineMetrics.d.ts'
import type { Rectangle2D } from '../../../../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
export class GlyphPage$Companion$CharacterGenerationInfo extends Object {
    constructor(fontGlyph: FontGlyph, glyphMetrics: GlyphMetrics, lineMetrics: LineMetrics)
    readonly atlasDimension: Dimension;
    atlasLocation: Point;
    // private bounds: Rectangle2D;
    readonly fontGlyph: FontGlyph;
    readonly glyphMetrics: GlyphMetrics;
    readonly lineMetrics: LineMetrics;
    readonly pixelHeight: number;
    readonly pixelWidth: number;
    readonly pixelXMax: number;
    readonly pixelXMin: number;
    readonly pixelYMax: number;
    readonly pixelYMin: number;
}