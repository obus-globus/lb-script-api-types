import type { AbstractLong2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2IntAVLTreeMap$Entry extends AbstractLong2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2IntAVLTreeMap$Entry;
    // private right: Long2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2IntAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2IntAVLTreeMap$Entry;
    left(arg0: Long2IntAVLTreeMap$Entry): void;
    next(): Long2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2IntAVLTreeMap$Entry;
    right(): Long2IntAVLTreeMap$Entry;
    right(arg0: Long2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}