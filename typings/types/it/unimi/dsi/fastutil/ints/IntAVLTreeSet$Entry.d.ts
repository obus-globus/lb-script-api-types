import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class IntAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: IntAVLTreeSet$Entry;
    // private right: IntAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): IntAVLTreeSet$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): IntAVLTreeSet$Entry;
    left(arg0: IntAVLTreeSet$Entry): void;
    next(): IntAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: IntAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): IntAVLTreeSet$Entry;
    right(): IntAVLTreeSet$Entry;
    right(arg0: IntAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: IntAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}