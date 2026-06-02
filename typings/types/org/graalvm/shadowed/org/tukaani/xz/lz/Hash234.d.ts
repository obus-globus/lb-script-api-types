import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { CRC32Hash } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/CRC32Hash.d.ts'
export class Hash234 extends CRC32Hash {
    constructor(dictSize: number, arrayCache: ArrayCache)
    // private hash2Table: number[];
    // private hash2Value: number;
    // private hash3Table: number[];
    // private hash3Value: number;
    // private hash4Mask: number;
    // private hash4Size: number;
    // private hash4Table: number[];
    // private hash4Value: number;
    calcHashes(buf: number[], off: number): void;
    getHash2Pos(): number;
    getHash3Pos(): number;
    getHash4Pos(): number;
    normalize(normalizationOffset: number): void;
    putArraysToCache(arrayCache: ArrayCache): void;
    updateTables(pos: number): void;
}