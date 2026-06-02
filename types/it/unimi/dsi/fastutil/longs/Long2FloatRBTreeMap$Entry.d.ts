import type { AbstractLong2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2FloatRBTreeMap$Entry extends AbstractLong2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2FloatRBTreeMap$Entry;
    // private right: Long2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2FloatRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2FloatRBTreeMap$Entry;
    left(arg0: Long2FloatRBTreeMap$Entry): void;
    next(): Long2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2FloatRBTreeMap$Entry;
    right(): Long2FloatRBTreeMap$Entry;
    right(arg0: Long2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}