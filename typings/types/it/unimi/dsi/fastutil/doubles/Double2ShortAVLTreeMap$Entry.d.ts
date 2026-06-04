import type { AbstractDouble2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ShortAVLTreeMap$Entry extends AbstractDouble2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2ShortAVLTreeMap$Entry;
    // private right: Double2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2ShortAVLTreeMap$Entry;
    left(arg0: Double2ShortAVLTreeMap$Entry): void;
    next(): Double2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2ShortAVLTreeMap$Entry;
    right(): Double2ShortAVLTreeMap$Entry;
    right(arg0: Double2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}