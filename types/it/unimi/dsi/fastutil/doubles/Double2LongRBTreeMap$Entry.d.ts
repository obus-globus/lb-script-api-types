import type { AbstractDouble2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2LongRBTreeMap$Entry extends AbstractDouble2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2LongRBTreeMap$Entry;
    // private right: Double2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2LongRBTreeMap$Entry;
    left(arg0: Double2LongRBTreeMap$Entry): void;
    next(): Double2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2LongRBTreeMap$Entry;
    right(): Double2LongRBTreeMap$Entry;
    right(arg0: Double2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}