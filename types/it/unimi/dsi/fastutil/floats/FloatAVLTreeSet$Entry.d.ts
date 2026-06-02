import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class FloatAVLTreeSet$Entry extends Object implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private info: number;
    // private key: number;
    // private left: FloatAVLTreeSet$Entry;
    // private right: FloatAVLTreeSet$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): FloatAVLTreeSet$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): FloatAVLTreeSet$Entry;
    left(arg0: FloatAVLTreeSet$Entry): void;
    next(): FloatAVLTreeSet$Entry;
    pred(): boolean;
    pred(arg0: FloatAVLTreeSet$Entry): void;
    pred(arg0: boolean): void;
    prev(): FloatAVLTreeSet$Entry;
    right(): FloatAVLTreeSet$Entry;
    right(arg0: FloatAVLTreeSet$Entry): void;
    succ(): boolean;
    succ(arg0: FloatAVLTreeSet$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}