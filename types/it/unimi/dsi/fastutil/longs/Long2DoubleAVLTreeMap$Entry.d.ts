import type { AbstractLong2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2DoubleAVLTreeMap$Entry extends AbstractLong2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2DoubleAVLTreeMap$Entry;
    // private right: Long2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2DoubleAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2DoubleAVLTreeMap$Entry;
    left(arg0: Long2DoubleAVLTreeMap$Entry): void;
    next(): Long2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2DoubleAVLTreeMap$Entry;
    right(): Long2DoubleAVLTreeMap$Entry;
    right(arg0: Long2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}