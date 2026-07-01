import type { AbstractDouble2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2FloatRBTreeMap$Entry extends AbstractDouble2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2FloatRBTreeMap$Entry;
    // private right: Double2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2FloatRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2FloatRBTreeMap$Entry;
    left(arg0: Double2FloatRBTreeMap$Entry): void;
    next(): Double2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2FloatRBTreeMap$Entry;
    right(): Double2FloatRBTreeMap$Entry;
    right(arg0: Double2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}