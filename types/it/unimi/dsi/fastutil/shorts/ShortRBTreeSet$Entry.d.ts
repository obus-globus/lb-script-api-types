import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ShortRBTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: ShortRBTreeSet$Entry;
    // private right: ShortRBTreeSet$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): ShortRBTreeSet$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): ShortRBTreeSet$Entry;
    left(arg0: ShortRBTreeSet$Entry): void;
    next(): ShortRBTreeSet$Entry;
    pred(): boolean;
    pred(arg0: ShortRBTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): ShortRBTreeSet$Entry;
    right(): ShortRBTreeSet$Entry;
    right(arg0: ShortRBTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: ShortRBTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}