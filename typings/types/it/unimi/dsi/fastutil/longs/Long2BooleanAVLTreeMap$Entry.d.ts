import type { AbstractLong2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2BooleanAVLTreeMap$Entry extends AbstractLong2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Long2BooleanAVLTreeMap$Entry;
    // private right: Long2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2BooleanAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2BooleanAVLTreeMap$Entry;
    left(arg0: Long2BooleanAVLTreeMap$Entry): void;
    next(): Long2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2BooleanAVLTreeMap$Entry;
    right(): Long2BooleanAVLTreeMap$Entry;
    right(arg0: Long2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Long2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}