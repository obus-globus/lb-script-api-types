import type { AbstractInt2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2BooleanAVLTreeMap$Entry extends AbstractInt2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Int2BooleanAVLTreeMap$Entry;
    // private right: Int2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2BooleanAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2BooleanAVLTreeMap$Entry;
    left(arg0: Int2BooleanAVLTreeMap$Entry): void;
    next(): Int2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2BooleanAVLTreeMap$Entry;
    right(): Int2BooleanAVLTreeMap$Entry;
    right(arg0: Int2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Int2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}