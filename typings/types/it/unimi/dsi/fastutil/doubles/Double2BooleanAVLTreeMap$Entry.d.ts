import type { AbstractDouble2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2BooleanAVLTreeMap$Entry extends AbstractDouble2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Double2BooleanAVLTreeMap$Entry;
    // private right: Double2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2BooleanAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2BooleanAVLTreeMap$Entry;
    left(arg0: Double2BooleanAVLTreeMap$Entry): void;
    next(): Double2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2BooleanAVLTreeMap$Entry;
    right(): Double2BooleanAVLTreeMap$Entry;
    right(arg0: Double2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Double2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}