import type { Object } from '../../../java/lang/Object.d.ts'
import type { DrawGlyphList } from '../../../sun/java2d/loops/DrawGlyphList.d.ts'
import type { DrawGlyphListAA } from '../../../sun/java2d/loops/DrawGlyphListAA.d.ts'
import type { DrawGlyphListColor } from '../../../sun/java2d/loops/DrawGlyphListColor.d.ts'
import type { DrawGlyphListLCD } from '../../../sun/java2d/loops/DrawGlyphListLCD.d.ts'
import type { DrawLine } from '../../../sun/java2d/loops/DrawLine.d.ts'
import type { DrawParallelogram } from '../../../sun/java2d/loops/DrawParallelogram.d.ts'
import type { DrawPath } from '../../../sun/java2d/loops/DrawPath.d.ts'
import type { DrawPolygons } from '../../../sun/java2d/loops/DrawPolygons.d.ts'
import type { DrawRect } from '../../../sun/java2d/loops/DrawRect.d.ts'
import type { FillParallelogram } from '../../../sun/java2d/loops/FillParallelogram.d.ts'
import type { FillPath } from '../../../sun/java2d/loops/FillPath.d.ts'
import type { FillRect } from '../../../sun/java2d/loops/FillRect.d.ts'
import type { FillSpans } from '../../../sun/java2d/loops/FillSpans.d.ts'
export class RenderLoops extends Object {
    static primTypeID: number;
    constructor()
    drawGlyphListAALoop: DrawGlyphListAA;
    drawGlyphListColorLoop: DrawGlyphListColor;
    drawGlyphListLCDLoop: DrawGlyphListLCD;
    drawGlyphListLoop: DrawGlyphList;
    drawLineLoop: DrawLine;
    drawParallelogramLoop: DrawParallelogram;
    drawPathLoop: DrawPath;
    drawPolygonsLoop: DrawPolygons;
    drawRectLoop: DrawRect;
    fillParallelogramLoop: FillParallelogram;
    fillPathLoop: FillPath;
    fillRectLoop: FillRect;
    fillSpansLoop: FillSpans;
}