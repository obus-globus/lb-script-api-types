import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ArrayCache } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
export class BasicArrayCache extends ArrayCache {
    static getDefaultCache(): ArrayCache;
    static getDummyCache(): ArrayCache;
    static getInstance(): BasicArrayCache;
    static setDefaultCache(paramarrayCache: ArrayCache): void;
    constructor()
    // private byteArrayCache: JavaMap<any, any>;
    // private intArrayCache: JavaMap<any, any>;
    getByteArray(size: number, fillWithZeros: boolean): number[];
    getIntArray(size: number, fillWithZeros: boolean): number[];
    putArray(array: number[]): void;
}