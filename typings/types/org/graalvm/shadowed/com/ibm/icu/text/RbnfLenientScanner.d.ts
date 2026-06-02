import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface RbnfLenientScanner extends Object{
    allIgnorable(s: string): boolean;
    findText(str: string, key: string, startingAt: number): number[];
    prefixLength(str: string, prefix: string): number;
}