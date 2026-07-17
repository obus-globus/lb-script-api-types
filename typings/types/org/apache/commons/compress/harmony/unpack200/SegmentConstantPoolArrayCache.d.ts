import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SegmentConstantPoolArrayCache$CachedArray } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPoolArrayCache$CachedArray.d.ts'
export class SegmentConstantPoolArrayCache extends Object {
    constructor()
    // private knownArrays: JavaMap<string[], SegmentConstantPoolArrayCache$CachedArray>;
    // private lastArray: string[];
    // private lastIndexes: number[];
    // private lastKey: string;
    arrayIsCached(arg0: string[]): boolean;
    cacheArray(arg0: string[]): void;
    indexesForArrayKey(arg0: string[], arg1: string): number[];
}