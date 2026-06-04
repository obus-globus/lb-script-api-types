import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TelemetryPropertyContainer extends Object{
    addNullProperty(arg0: string): void;
    addProperty(arg0: string, arg1: boolean): void;
    addProperty(arg0: string, arg1: number): void;
    addProperty(arg0: string, arg1: string): void;
}