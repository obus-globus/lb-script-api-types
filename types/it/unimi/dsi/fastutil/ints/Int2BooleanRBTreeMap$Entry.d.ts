import type { AbstractInt2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2BooleanRBTreeMap$Entry extends AbstractInt2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Int2BooleanRBTreeMap$Entry;
    // private right: Int2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2BooleanRBTreeMap$Entry;
    left(arg0: Int2BooleanRBTreeMap$Entry): void;
    next(): Int2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2BooleanRBTreeMap$Entry;
    right(): Int2BooleanRBTreeMap$Entry;
    right(arg0: Int2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Int2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}