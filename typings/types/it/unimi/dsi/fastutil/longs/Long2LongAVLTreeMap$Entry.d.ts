import type { AbstractLong2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2LongAVLTreeMap$Entry extends AbstractLong2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2LongAVLTreeMap$Entry;
    // private right: Long2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2LongAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2LongAVLTreeMap$Entry;
    left(arg0: Long2LongAVLTreeMap$Entry): void;
    next(): Long2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2LongAVLTreeMap$Entry;
    right(): Long2LongAVLTreeMap$Entry;
    right(arg0: Long2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}