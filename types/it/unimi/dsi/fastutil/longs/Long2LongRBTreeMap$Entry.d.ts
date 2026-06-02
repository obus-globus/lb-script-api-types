import type { AbstractLong2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2LongRBTreeMap$Entry extends AbstractLong2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2LongRBTreeMap$Entry;
    // private right: Long2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2LongRBTreeMap$Entry;
    left(arg0: Long2LongRBTreeMap$Entry): void;
    next(): Long2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2LongRBTreeMap$Entry;
    right(): Long2LongRBTreeMap$Entry;
    right(arg0: Long2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}