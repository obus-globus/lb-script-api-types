import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ByteAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: ByteAVLTreeSet$Entry;
    // private right: ByteAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): ByteAVLTreeSet$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): ByteAVLTreeSet$Entry;
    left(arg0: ByteAVLTreeSet$Entry): void;
    next(): ByteAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: ByteAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): ByteAVLTreeSet$Entry;
    right(): ByteAVLTreeSet$Entry;
    right(arg0: ByteAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: ByteAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}