import type { CharsToNameCanonicalizer$Bucket } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/CharsToNameCanonicalizer$Bucket.d.ts'
import type { CharsToNameCanonicalizer$TableInfo } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/CharsToNameCanonicalizer$TableInfo.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { AtomicReference } from '../../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharsToNameCanonicalizer extends Object {
    static HASH_MULT: number;
    static createRoot(): CharsToNameCanonicalizer;
    private constructor(arg0: CharsToNameCanonicalizer, arg1: number, arg2: number, arg3: CharsToNameCanonicalizer$TableInfo)
    private constructor(arg0: number)
    // private _buckets: CharsToNameCanonicalizer$Bucket[];
    // private _canonicalize: boolean;
    // private _flags: number;
    // private _hashShared: boolean;
    // private _indexMask: number;
    // private _longestCollisionList: number;
    // private _overflows: BitSet;
    // private _parent: CharsToNameCanonicalizer;
    // private _seed: number;
    // private _size: number;
    // private _sizeThreshold: number;
    // private _symbols: string[];
    // private _tableInfo: AtomicReference<CharsToNameCanonicalizer$TableInfo>;
    // private _addSymbol(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): string;
    // private _findSymbol2(arg0: string[], arg1: number, arg2: number, arg3: CharsToNameCanonicalizer$Bucket): string;
    // private _handleSpillOverflow(arg0: number, arg1: CharsToNameCanonicalizer$Bucket, arg2: number): void;
    _hashToIndex(arg0: number): number;
    // private _reportTooManyCollisions(arg0: number): void;
    calcHash(arg0: string[], arg1: number, arg2: number): number;
    calcHash(arg0: string): number;
    // private copyArrays(): void;
    findSymbol(arg0: string[], arg1: number, arg2: number, arg3: number): string;
    hashSeed(): number;
    makeChild(arg0: number): CharsToNameCanonicalizer;
    maybeDirty(): boolean;
    // private mergeChild(arg0: CharsToNameCanonicalizer$TableInfo): void;
    // private rehash(): void;
    release(): void;
    size(): number;
}