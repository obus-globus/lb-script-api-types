import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SegmentConstantPoolArrayCache } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPoolArrayCache.d.ts'
export class SegmentConstantPoolArrayCache$CachedArray extends Object {
    constructor(null_: SegmentConstantPoolArrayCache, arg1: string[])
    // private lastKnownSize: number;
    // private primaryArray: string[];
    // private primaryTable: { [key: string]: number[] };
    cacheIndexes(): void;
    indexesForKey(arg0: string): number[];
    lastKnownSize(): number;
}