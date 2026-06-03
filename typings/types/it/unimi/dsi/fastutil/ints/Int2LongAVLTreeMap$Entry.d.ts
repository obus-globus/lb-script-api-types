import type { AbstractInt2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2LongAVLTreeMap$Entry extends AbstractInt2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2LongAVLTreeMap$Entry;
    // private right: Int2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2LongAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2LongAVLTreeMap$Entry;
    left(arg0: Int2LongAVLTreeMap$Entry): void;
    next(): Int2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2LongAVLTreeMap$Entry;
    right(): Int2LongAVLTreeMap$Entry;
    right(arg0: Int2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}