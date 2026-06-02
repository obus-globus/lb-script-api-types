import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
export class ResettableArrayCache extends ArrayCache {
    static getDefaultCache(): ArrayCache;
    static getDummyCache(): ArrayCache;
    static setDefaultCache(paramarrayCache: ArrayCache): void;
    constructor(arrayCache: ArrayCache)
    // private arrayCache: ArrayCache;
    // private byteArrays: number[][];
    // private intArrays: number[][];
    getByteArray(size: number, fillWithZeros: boolean): number[];
    getIntArray(size: number, fillWithZeros: boolean): number[];
    putArray(array: number[]): void;
    putArray(array: number[]): void;
    reset(): void;
}