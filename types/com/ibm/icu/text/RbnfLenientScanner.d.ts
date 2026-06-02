import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RbnfLenientScanner extends Object{
    allIgnorable(arg0: string): boolean;
    findText(arg0: string, arg1: string, arg2: number): number[];
    prefixLength(arg0: string, arg1: string): number;
}