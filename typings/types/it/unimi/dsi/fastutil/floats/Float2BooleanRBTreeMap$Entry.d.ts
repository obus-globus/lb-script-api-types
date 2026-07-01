import type { AbstractFloat2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2BooleanRBTreeMap$Entry extends AbstractFloat2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Float2BooleanRBTreeMap$Entry;
    // private right: Float2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2BooleanRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2BooleanRBTreeMap$Entry;
    left(arg0: Float2BooleanRBTreeMap$Entry): void;
    next(): Float2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2BooleanRBTreeMap$Entry;
    right(): Float2BooleanRBTreeMap$Entry;
    right(arg0: Float2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Float2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}