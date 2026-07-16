import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
import type { SurfaceData } from '../../../sun/java2d/SurfaceData.d.ts'
import type { CompositeType } from '../../../sun/java2d/loops/CompositeType.d.ts'
import type { GraphicsPrimitive } from '../../../sun/java2d/loops/GraphicsPrimitive.d.ts'
import type { SurfaceType } from '../../../sun/java2d/loops/SurfaceType.d.ts'
import type { SpanIterator } from '../../../sun/java2d/pipe/SpanIterator.d.ts'
export class FillSpans extends GraphicsPrimitive {
    static TRACECOUNTS: number;
    static TRACELOG: number;
    static TRACETIMESTAMP: number;
    static methodSignature: string;
    static primTypeID: number;
    static tracefile: string;
    static traceflags: number;
    static traceout: PrintStream;
    static locate(paramarg0: SurfaceType, paramarg1: CompositeType, paramarg2: SurfaceType): FillSpans;
    static makePrimTypeID(): number;
    static makeUniqueID(paramarg0: number, paramarg1: SurfaceType, paramarg2: CompositeType, paramarg3: SurfaceType): number;
    static simplename(paramarg0: Field[], paramarg1: Object): string;
    static simplename(paramarg0: CompositeType): string;
    static simplename(paramarg0: SurfaceType): string;
    static tracePrimitive(paramarg0: Object): void;
    static tracingEnabled(): boolean;
    constructor(arg0: number, arg1: SurfaceType, arg2: CompositeType, arg3: SurfaceType)
    constructor(arg0: SurfaceType, arg1: CompositeType, arg2: SurfaceType)
    // private FillSpans(arg0: SunGraphics2D, arg1: SurfaceData, arg2: number, arg3: number, arg4: SpanIterator): void;
    FillSpans(arg0: SunGraphics2D, arg1: SurfaceData, arg2: SpanIterator): void;
    traceWrap(): GraphicsPrimitive;
}