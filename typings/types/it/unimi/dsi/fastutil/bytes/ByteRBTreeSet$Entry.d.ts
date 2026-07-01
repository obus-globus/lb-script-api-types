import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ByteRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: ByteRBTreeSet$Entry;
    // private right: ByteRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): ByteRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): ByteRBTreeSet$Entry;
    left(arg0: ByteRBTreeSet$Entry): void;
    next(): ByteRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: ByteRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): ByteRBTreeSet$Entry;
    right(): ByteRBTreeSet$Entry;
    right(arg0: ByteRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: ByteRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}