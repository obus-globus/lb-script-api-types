import type { AbstractDouble2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2IntAVLTreeMap$Entry extends AbstractDouble2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2IntAVLTreeMap$Entry;
    // private right: Double2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2IntAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2IntAVLTreeMap$Entry;
    left(arg0: Double2IntAVLTreeMap$Entry): void;
    next(): Double2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2IntAVLTreeMap$Entry;
    right(): Double2IntAVLTreeMap$Entry;
    right(arg0: Double2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}