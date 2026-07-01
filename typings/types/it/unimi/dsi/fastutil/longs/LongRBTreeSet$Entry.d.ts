import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class LongRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: LongRBTreeSet$Entry;
    // private right: LongRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): LongRBTreeSet$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): LongRBTreeSet$Entry;
    left(arg0: LongRBTreeSet$Entry): void;
    next(): LongRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: LongRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): LongRBTreeSet$Entry;
    right(): LongRBTreeSet$Entry;
    right(arg0: LongRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: LongRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}