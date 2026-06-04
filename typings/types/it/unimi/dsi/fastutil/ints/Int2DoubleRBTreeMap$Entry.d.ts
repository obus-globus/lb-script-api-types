import type { AbstractInt2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2DoubleRBTreeMap$Entry extends AbstractInt2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2DoubleRBTreeMap$Entry;
    // private right: Int2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2DoubleRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2DoubleRBTreeMap$Entry;
    left(arg0: Int2DoubleRBTreeMap$Entry): void;
    next(): Int2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2DoubleRBTreeMap$Entry;
    right(): Int2DoubleRBTreeMap$Entry;
    right(arg0: Int2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}