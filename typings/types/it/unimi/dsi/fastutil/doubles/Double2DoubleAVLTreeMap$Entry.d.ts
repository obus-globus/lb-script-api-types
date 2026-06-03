import type { AbstractDouble2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2DoubleAVLTreeMap$Entry extends AbstractDouble2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2DoubleAVLTreeMap$Entry;
    // private right: Double2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2DoubleAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2DoubleAVLTreeMap$Entry;
    left(arg0: Double2DoubleAVLTreeMap$Entry): void;
    next(): Double2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2DoubleAVLTreeMap$Entry;
    right(): Double2DoubleAVLTreeMap$Entry;
    right(arg0: Double2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}