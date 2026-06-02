import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IRemapper extends Object{
    map(arg0: string): string;
    mapDesc(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    unmap(arg0: string): string;
    unmapDesc(arg0: string): string;
}