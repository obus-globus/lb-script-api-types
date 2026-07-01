import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class CharAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: string)
    // private info: number;
    // private key: string;
    // private left: CharAVLTreeSet$Entry;
    // private right: CharAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): CharAVLTreeSet$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): CharAVLTreeSet$Entry;
    left(arg0: CharAVLTreeSet$Entry): void;
    next(): CharAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: CharAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): CharAVLTreeSet$Entry;
    right(): CharAVLTreeSet$Entry;
    right(arg0: CharAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: CharAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}