import type { AbstractInt2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2LongRBTreeMap$Entry extends AbstractInt2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2LongRBTreeMap$Entry;
    // private right: Int2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2LongRBTreeMap$Entry;
    left(arg0: Int2LongRBTreeMap$Entry): void;
    next(): Int2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2LongRBTreeMap$Entry;
    right(): Int2LongRBTreeMap$Entry;
    right(arg0: Int2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}