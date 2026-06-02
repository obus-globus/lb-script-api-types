import type { DataInputStream } from '../../../../../../../java/io/DataInputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
export class LZDecoder extends Object {
    constructor(dictSize: number, presetDict: number[], arrayCache: ArrayCache)
    // private buf: number[];
    // private bufSize: number;
    // private full: number;
    readonly limit: number;
    // private pendingDist: number;
    // private pendingLen: number;
    readonly pos: number;
    // private start: number;
    copyUncompressed(inData: DataInputStream, len: number): void;
    flush(out: number[], outOff: number): number;
    getByte(dist: number): number;
    getPos(): number;
    hasPending(): boolean;
    hasSpace(): boolean;
    putArraysToCache(arrayCache: ArrayCache): void;
    putByte(b: number): void;
    repeat(dist: number, len: number): void;
    repeatPending(): void;
    reset(): void;
    setLimit(outMax: number): void;
}