import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayCache extends Object {
    static getDefaultCache(): ArrayCache;
    static getDummyCache(): ArrayCache;
    static setDefaultCache(paramarrayCache: ArrayCache): void;
    constructor()
    getByteArray(size: number, fillWithZeros: boolean): number[];
    getIntArray(size: number, fillWithZeros: boolean): number[];
    putArray(array: number[]): void;
}