import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { LineMetrics } from '../../java/awt/font/LineMetrics.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { CoreMetrics } from '../../sun/font/CoreMetrics.d.ts'
export class FontLineMetrics extends LineMetrics implements Cloneable {
    constructor(arg0: number, arg1: CoreMetrics, arg2: FontRenderContext)
    cm: CoreMetrics;
    frc: FontRenderContext;
    numchars: number;
    protected clone(): Object;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getAscent(): number;
    getBaselineIndex(): number;
    getBaselineOffsets(): number[];
    getDescent(): number;
    getHeight(): number;
    getLeading(): number;
    getNumChars(): number;
    getStrikethroughOffset(): number;
    getStrikethroughThickness(): number;
    getUnderlineOffset(): number;
    getUnderlineThickness(): number;
    hashCode(): number;
}