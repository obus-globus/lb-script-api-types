import type { AbstractDouble2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2LongAVLTreeMap$Entry extends AbstractDouble2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2LongAVLTreeMap$Entry;
    // private right: Double2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2LongAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2LongAVLTreeMap$Entry;
    left(arg0: Double2LongAVLTreeMap$Entry): void;
    next(): Double2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2LongAVLTreeMap$Entry;
    right(): Double2LongAVLTreeMap$Entry;
    right(arg0: Double2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}