import type { AbstractLong2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2DoubleRBTreeMap$Entry extends AbstractLong2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2DoubleRBTreeMap$Entry;
    // private right: Long2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2DoubleRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2DoubleRBTreeMap$Entry;
    left(arg0: Long2DoubleRBTreeMap$Entry): void;
    next(): Long2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2DoubleRBTreeMap$Entry;
    right(): Long2DoubleRBTreeMap$Entry;
    right(arg0: Long2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}