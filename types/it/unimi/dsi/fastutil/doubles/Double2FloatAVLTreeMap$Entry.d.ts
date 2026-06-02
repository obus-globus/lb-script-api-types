import type { AbstractDouble2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2FloatAVLTreeMap$Entry extends AbstractDouble2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2FloatAVLTreeMap$Entry;
    // private right: Double2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2FloatAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2FloatAVLTreeMap$Entry;
    left(arg0: Double2FloatAVLTreeMap$Entry): void;
    next(): Double2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2FloatAVLTreeMap$Entry;
    right(): Double2FloatAVLTreeMap$Entry;
    right(arg0: Double2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}