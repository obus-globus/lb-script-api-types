import type { Object } from '../../java/lang/Object.d.ts'
import type { TraceBase } from '../../kotlinx/atomicfu/TraceBase.d.ts'
import type { TraceFormat } from '../../kotlinx/atomicfu/TraceFormat.d.ts'
export class TraceKt extends Object {
    static Trace(size: number, format: TraceFormat): TraceBase;
    static getTraceFormatDefault(): TraceFormat;
    static named(self: TraceBase, name: string): TraceBase;
}