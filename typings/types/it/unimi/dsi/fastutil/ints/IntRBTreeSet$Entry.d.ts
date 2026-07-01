import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class IntRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: IntRBTreeSet$Entry;
    // private right: IntRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): IntRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): IntRBTreeSet$Entry;
    left(arg0: IntRBTreeSet$Entry): void;
    next(): IntRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: IntRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): IntRBTreeSet$Entry;
    right(): IntRBTreeSet$Entry;
    right(arg0: IntRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: IntRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}