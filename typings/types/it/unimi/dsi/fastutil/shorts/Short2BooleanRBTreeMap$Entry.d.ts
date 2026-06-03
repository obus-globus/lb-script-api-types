import type { AbstractShort2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2BooleanRBTreeMap$Entry extends AbstractShort2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Short2BooleanRBTreeMap$Entry;
    // private right: Short2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2BooleanRBTreeMap$Entry;
    left(arg0: Short2BooleanRBTreeMap$Entry): void;
    next(): Short2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2BooleanRBTreeMap$Entry;
    right(): Short2BooleanRBTreeMap$Entry;
    right(arg0: Short2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Short2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}