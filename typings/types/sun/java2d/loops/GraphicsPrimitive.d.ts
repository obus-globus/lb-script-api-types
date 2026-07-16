import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CompositeType } from '../../../sun/java2d/loops/CompositeType.d.ts'
import type { GraphicsPrimitive$GeneralBinaryOp } from '../../../sun/java2d/loops/GraphicsPrimitive$GeneralBinaryOp.d.ts'
import type { GraphicsPrimitive$GeneralUnaryOp } from '../../../sun/java2d/loops/GraphicsPrimitive$GeneralUnaryOp.d.ts'
import type { SurfaceType } from '../../../sun/java2d/loops/SurfaceType.d.ts'
export abstract class GraphicsPrimitive extends Object {
    static TRACECOUNTS: number;
    static TRACELOG: number;
    static TRACETIMESTAMP: number;
    static tracefile: string;
    static traceflags: number;
    static traceout: PrintStream;
    static makePrimTypeID(): number;
    static makeUniqueID(paramarg0: number, paramarg1: SurfaceType, paramarg2: CompositeType, paramarg3: SurfaceType): number;
    static simplename(paramarg0: Field[], paramarg1: Object): string;
    static simplename(paramarg0: CompositeType): string;
    static simplename(paramarg0: SurfaceType): string;
    static tracePrimitive(paramarg0: Object): void;
    static tracingEnabled(): boolean;
    constructor(arg0: number, arg1: string, arg2: number, arg3: SurfaceType, arg4: CompositeType, arg5: SurfaceType)
    constructor(arg0: string, arg1: number, arg2: SurfaceType, arg3: CompositeType, arg4: SurfaceType)
    // private cachedname: string;
    readonly compositeType: CompositeType;
    readonly destType: SurfaceType;
    // private methodSignature: string;
    // private pNativePrim: number;
    readonly sourceType: SurfaceType;
    readonly uniqueID: number;
    getCompositeType(): CompositeType;
    getDestType(): SurfaceType;
    getNativePrim(): number;
    getPrimTypeID(): number;
    getSignature(): string;
    getSourceType(): SurfaceType;
    getUniqueID(): number;
    makePrimitive(arg0: SurfaceType, arg1: CompositeType, arg2: SurfaceType): GraphicsPrimitive;
    satisfies(arg0: string, arg1: SurfaceType, arg2: CompositeType, arg3: SurfaceType): boolean;
    satisfiesSameAs(arg0: GraphicsPrimitive): boolean;
    setupGeneralBinaryOp(arg0: GraphicsPrimitive$GeneralBinaryOp): void;
    setupGeneralUnaryOp(arg0: GraphicsPrimitive$GeneralUnaryOp): void;
    toString(): string;
    traceWrap(): GraphicsPrimitive;
}