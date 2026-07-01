import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class FloatRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: FloatRBTreeSet$Entry;
    // private right: FloatRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): FloatRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): FloatRBTreeSet$Entry;
    left(arg0: FloatRBTreeSet$Entry): void;
    next(): FloatRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: FloatRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): FloatRBTreeSet$Entry;
    right(): FloatRBTreeSet$Entry;
    right(arg0: FloatRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: FloatRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}