import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITelemetry extends Object{
    flush(arg0: string, arg1: string): void;
    startEvent(arg0: string, arg1: Event): void;
    stopEvent(arg0: string, arg1: Event): void;
}