import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
export class BasicArrayCache extends ArrayCache {
    static getDefaultCache(): ArrayCache;
    static getDummyCache(): ArrayCache;
    static getInstance(): BasicArrayCache;
    static setDefaultCache(paramarrayCache: ArrayCache): void;
    constructor()
    // private byteArrayCache: { [key: string]: any };
    // private intArrayCache: { [key: string]: any };
    getByteArray(size: number, fillWithZeros: boolean): number[];
    getIntArray(size: number, fillWithZeros: boolean): number[];
    putArray(array: number[]): void;
}