import type { AbstractInt2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2IntAVLTreeMap$Entry extends AbstractInt2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2IntAVLTreeMap$Entry;
    // private right: Int2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2IntAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2IntAVLTreeMap$Entry;
    left(arg0: Int2IntAVLTreeMap$Entry): void;
    next(): Int2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2IntAVLTreeMap$Entry;
    right(): Int2IntAVLTreeMap$Entry;
    right(arg0: Int2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}