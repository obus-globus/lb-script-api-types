import type { AbstractInt2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2FloatRBTreeMap$Entry extends AbstractInt2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2FloatRBTreeMap$Entry;
    // private right: Int2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2FloatRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2FloatRBTreeMap$Entry;
    left(arg0: Int2FloatRBTreeMap$Entry): void;
    next(): Int2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2FloatRBTreeMap$Entry;
    right(): Int2FloatRBTreeMap$Entry;
    right(arg0: Int2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}