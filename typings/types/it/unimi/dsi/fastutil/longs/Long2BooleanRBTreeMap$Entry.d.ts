import type { AbstractLong2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2BooleanRBTreeMap$Entry extends AbstractLong2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Long2BooleanRBTreeMap$Entry;
    // private right: Long2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2BooleanRBTreeMap$Entry;
    left(arg0: Long2BooleanRBTreeMap$Entry): void;
    next(): Long2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2BooleanRBTreeMap$Entry;
    right(): Long2BooleanRBTreeMap$Entry;
    right(arg0: Long2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Long2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}