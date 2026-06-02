import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HashFunction extends Object{
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}