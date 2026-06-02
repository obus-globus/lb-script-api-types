import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RuntimeRemapper extends Object{
    remapClassName(arg0: string): string;
    remapFieldName(arg0: string, arg1: string, arg2: string): string;
    remapMethodName(arg0: string, arg1: string, arg2: string): string;
}