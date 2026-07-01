import type { AbstractFloat2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2DoubleRBTreeMap$Entry extends AbstractFloat2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2DoubleRBTreeMap$Entry;
    // private right: Float2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2DoubleRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2DoubleRBTreeMap$Entry;
    left(arg0: Float2DoubleRBTreeMap$Entry): void;
    next(): Float2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2DoubleRBTreeMap$Entry;
    right(): Float2DoubleRBTreeMap$Entry;
    right(arg0: Float2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}