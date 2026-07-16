import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { IntStream } from '../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class BitSet extends Object implements Serializable, Cloneable {
    static valueOf(paramarg0: number[]): BitSet;
    static valueOf(paramarg0: ByteBuffer): BitSet;
    static valueOf(paramarg0: LongBuffer): BitSet;
    constructor()
    constructor(arg0: number)
    // private sizeIsSticky: boolean;
    // private words: number[];
    // private wordsInUse: number;
    and(arg0: BitSet): void;
    andNot(arg0: BitSet): void;
    cardinality(): number;
    // private checkInvariants(): void;
    clear(): void;
    clear(arg0: number): void;
    clear(arg0: number, arg1: number): void;
    clone(): Object;
    // private ensureCapacity(arg0: number): void;
    equals(arg0: Object | null): boolean;
    // private expandTo(arg0: number): void;
    flip(arg0: number): void;
    flip(arg0: number, arg1: number): void;
    get(arg0: number): boolean;
    get(arg0: number, arg1: number): BitSet;
    hashCode(): number;
    // private initWords(arg0: number): void;
    intersects(arg0: BitSet): boolean;
    isEmpty(): boolean;
    length(): number;
    nextClearBit(arg0: number): number;
    nextSetBit(arg0: number): number;
    // private nextSetBit(arg0: number, arg1: number): number;
    or(arg0: BitSet): void;
    previousClearBit(arg0: number): number;
    previousSetBit(arg0: number): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private recalculateWordsInUse(): void;
    set(arg0: number): void;
    set(arg0: number, arg1: boolean): void;
    set(arg0: number, arg1: number): void;
    set(arg0: number, arg1: number, arg2: boolean): void;
    size(): number;
    stream(): IntStream;
    toByteArray(): number[];
    toLongArray(): number[];
    toString(): string;
    // private trimToSize(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
    xor(arg0: BitSet): void;
}