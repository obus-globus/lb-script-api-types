import type { AbstractLong2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ShortRBTreeMap$Entry extends AbstractLong2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2ShortRBTreeMap$Entry;
    // private right: Long2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2ShortRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2ShortRBTreeMap$Entry;
    left(arg0: Long2ShortRBTreeMap$Entry): void;
    next(): Long2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2ShortRBTreeMap$Entry;
    right(): Long2ShortRBTreeMap$Entry;
    right(arg0: Long2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}