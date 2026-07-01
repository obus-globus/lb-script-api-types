import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ShortAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: ShortAVLTreeSet$Entry;
    // private right: ShortAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): ShortAVLTreeSet$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): ShortAVLTreeSet$Entry;
    left(arg0: ShortAVLTreeSet$Entry): void;
    next(): ShortAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: ShortAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): ShortAVLTreeSet$Entry;
    right(): ShortAVLTreeSet$Entry;
    right(arg0: ShortAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: ShortAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}