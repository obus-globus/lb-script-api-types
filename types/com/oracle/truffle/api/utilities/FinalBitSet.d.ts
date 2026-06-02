import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FinalBitSet extends Object {
    static EMPTY: FinalBitSet;
    static valueOf(paramoriginalBitSet: BitSet): FinalBitSet;
    static valueOf(paramlongs: number[]): FinalBitSet;
    private constructor(words: number[])
    // private words: number[];
    cardinality(): number;
    equals(obj: Object | null): boolean;
    get(bitIndex: number): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    length(): number;
    nextClearBit(fromIndex: number): number;
    nextSetBit(fromIndex: number): number;
    size(): number;
    toLongArray(): number[];
    toString(): string;
}