import type { AbstractLong2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2IntRBTreeMap$Entry extends AbstractLong2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2IntRBTreeMap$Entry;
    // private right: Long2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2IntRBTreeMap$Entry;
    left(arg0: Long2IntRBTreeMap$Entry): void;
    next(): Long2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2IntRBTreeMap$Entry;
    right(): Long2IntRBTreeMap$Entry;
    right(arg0: Long2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}