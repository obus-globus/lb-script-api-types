import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITelemetry extends Object{
    flush(arg0: string, arg1: string): void;
    startEvent(arg0: string, arg1: JavaMap<any, any>): void;
    stopEvent(arg0: string, arg1: JavaMap<any, any>): void;
}