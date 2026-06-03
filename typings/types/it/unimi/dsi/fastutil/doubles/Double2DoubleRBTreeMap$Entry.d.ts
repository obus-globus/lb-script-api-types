import type { AbstractDouble2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2DoubleRBTreeMap$Entry extends AbstractDouble2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2DoubleRBTreeMap$Entry;
    // private right: Double2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2DoubleRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2DoubleRBTreeMap$Entry;
    left(arg0: Double2DoubleRBTreeMap$Entry): void;
    next(): Double2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2DoubleRBTreeMap$Entry;
    right(): Double2DoubleRBTreeMap$Entry;
    right(arg0: Double2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}