import type { AbstractDouble2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2IntRBTreeMap$Entry extends AbstractDouble2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2IntRBTreeMap$Entry;
    // private right: Double2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2IntRBTreeMap$Entry;
    left(arg0: Double2IntRBTreeMap$Entry): void;
    next(): Double2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2IntRBTreeMap$Entry;
    right(): Double2IntRBTreeMap$Entry;
    right(arg0: Double2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}