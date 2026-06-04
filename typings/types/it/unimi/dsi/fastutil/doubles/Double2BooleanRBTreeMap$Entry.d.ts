import type { AbstractDouble2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2BooleanRBTreeMap$Entry extends AbstractDouble2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Double2BooleanRBTreeMap$Entry;
    // private right: Double2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2BooleanRBTreeMap$Entry;
    left(arg0: Double2BooleanRBTreeMap$Entry): void;
    next(): Double2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2BooleanRBTreeMap$Entry;
    right(): Double2BooleanRBTreeMap$Entry;
    right(arg0: Double2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Double2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}