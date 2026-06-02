import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface ExecuteTracingSupport extends Object{
    isTracingEnabled(): boolean;
    traceOnEnter(arguments: Object[]): void;
    traceOnException(t: Throwable): void;
    traceOnReturn(returnValue: Object): void;
}