import type { Object } from '../../java/lang/Object.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
import type { TraceFormat } from '../../kotlinx/atomicfu/TraceFormat.d.ts'
export class TraceKt extends Object {
    static Trace(paramarg0: number, paramarg1: TraceFormat): TraceBase;
    static getTraceFormatDefault(): TraceFormat;
    static named(paramarg0: TraceBase, paramarg1: string): TraceBase;
}