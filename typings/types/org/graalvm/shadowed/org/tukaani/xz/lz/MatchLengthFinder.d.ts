import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface MatchLengthFinder extends Object{
    getExtraSize(): number;
    getLen(buf: number[], off: number, delta: number, len: number, lenLimit: number): number;
}