import type { AbstractLong2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2FloatAVLTreeMap$Entry extends AbstractLong2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2FloatAVLTreeMap$Entry;
    // private right: Long2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2FloatAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2FloatAVLTreeMap$Entry;
    left(arg0: Long2FloatAVLTreeMap$Entry): void;
    next(): Long2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2FloatAVLTreeMap$Entry;
    right(): Long2FloatAVLTreeMap$Entry;
    right(arg0: Long2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}