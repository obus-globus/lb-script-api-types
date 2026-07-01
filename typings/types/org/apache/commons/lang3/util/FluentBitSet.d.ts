import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class FluentBitSet extends Object implements Serializable, Cloneable {
    constructor()
    constructor(arg0: BitSet)
    constructor(arg0: number)
    // private bitSet: BitSet;
    and(arg0: BitSet): FluentBitSet;
    and(arg0: FluentBitSet): FluentBitSet;
    andNot(arg0: BitSet): FluentBitSet;
    andNot(arg0: FluentBitSet): FluentBitSet;
    bitSet(): BitSet;
    cardinality(): number;
    clear(): FluentBitSet;
    clear(arg0: number): FluentBitSet;
    clear(arg0: number, arg1: number): FluentBitSet;
    clear(arg0: number[]): FluentBitSet;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    flip(arg0: number): FluentBitSet;
    flip(arg0: number, arg1: number): FluentBitSet;
    get(arg0: number): boolean;
    get(arg0: number, arg1: number): FluentBitSet;
    hashCode(): number;
    intersects(arg0: BitSet): boolean;
    intersects(arg0: FluentBitSet): boolean;
    isEmpty(): boolean;
    length(): number;
    nextClearBit(arg0: number): number;
    nextSetBit(arg0: number): number;
    or(arg0: BitSet): FluentBitSet;
    or(arg0: FluentBitSet[]): FluentBitSet;
    or(arg0: FluentBitSet): FluentBitSet;
    previousClearBit(arg0: number): number;
    previousSetBit(arg0: number): number;
    set(arg0: number): FluentBitSet;
    set(arg0: number, arg1: boolean): FluentBitSet;
    set(arg0: number, arg1: number): FluentBitSet;
    set(arg0: number, arg1: number, arg2: boolean): FluentBitSet;
    set(arg0: number[]): FluentBitSet;
    setInclusive(arg0: number, arg1: number): FluentBitSet;
    size(): number;
    stream(): IntStream;
    toByteArray(): number[];
    toLongArray(): number[];
    toString(): string;
    xor(arg0: BitSet): FluentBitSet;
    xor(arg0: FluentBitSet): FluentBitSet;
}