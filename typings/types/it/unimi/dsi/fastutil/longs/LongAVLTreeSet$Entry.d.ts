import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class LongAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: LongAVLTreeSet$Entry;
    // private right: LongAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): LongAVLTreeSet$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): LongAVLTreeSet$Entry;
    left(arg0: LongAVLTreeSet$Entry): void;
    next(): LongAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: LongAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): LongAVLTreeSet$Entry;
    right(): LongAVLTreeSet$Entry;
    right(arg0: LongAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: LongAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}