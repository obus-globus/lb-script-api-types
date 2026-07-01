import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class DoubleRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: DoubleRBTreeSet$Entry;
    // private right: DoubleRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): DoubleRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): DoubleRBTreeSet$Entry;
    left(arg0: DoubleRBTreeSet$Entry): void;
    next(): DoubleRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: DoubleRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): DoubleRBTreeSet$Entry;
    right(): DoubleRBTreeSet$Entry;
    right(arg0: DoubleRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: DoubleRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}