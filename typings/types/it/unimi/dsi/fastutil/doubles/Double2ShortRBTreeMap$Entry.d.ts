import type { AbstractDouble2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ShortRBTreeMap$Entry extends AbstractDouble2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2ShortRBTreeMap$Entry;
    // private right: Double2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2ShortRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2ShortRBTreeMap$Entry;
    left(arg0: Double2ShortRBTreeMap$Entry): void;
    next(): Double2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2ShortRBTreeMap$Entry;
    right(): Double2ShortRBTreeMap$Entry;
    right(arg0: Double2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}