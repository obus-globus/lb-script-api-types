import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class DoubleAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: DoubleAVLTreeSet$Entry;
    // private right: DoubleAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): DoubleAVLTreeSet$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): DoubleAVLTreeSet$Entry;
    left(arg0: DoubleAVLTreeSet$Entry): void;
    next(): DoubleAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: DoubleAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): DoubleAVLTreeSet$Entry;
    right(): DoubleAVLTreeSet$Entry;
    right(arg0: DoubleAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: DoubleAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}