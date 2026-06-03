import type { AbstractInt2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2IntRBTreeMap$Entry extends AbstractInt2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2IntRBTreeMap$Entry;
    // private right: Int2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2IntRBTreeMap$Entry;
    left(arg0: Int2IntRBTreeMap$Entry): void;
    next(): Int2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2IntRBTreeMap$Entry;
    right(): Int2IntRBTreeMap$Entry;
    right(arg0: Int2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}