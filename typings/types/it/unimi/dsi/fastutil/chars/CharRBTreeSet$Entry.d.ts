import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class CharRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: string)
    // private info: number;
    // private key: string;
    // private left: CharRBTreeSet$Entry;
    // private right: CharRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): CharRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): CharRBTreeSet$Entry;
    left(arg0: CharRBTreeSet$Entry): void;
    next(): CharRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: CharRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): CharRBTreeSet$Entry;
    right(): CharRBTreeSet$Entry;
    right(arg0: CharRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: CharRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}