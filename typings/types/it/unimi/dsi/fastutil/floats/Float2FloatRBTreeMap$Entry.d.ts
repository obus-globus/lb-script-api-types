import type { AbstractFloat2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2FloatRBTreeMap$Entry extends AbstractFloat2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2FloatRBTreeMap$Entry;
    // private right: Float2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2FloatRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2FloatRBTreeMap$Entry;
    left(arg0: Float2FloatRBTreeMap$Entry): void;
    next(): Float2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2FloatRBTreeMap$Entry;
    right(): Float2FloatRBTreeMap$Entry;
    right(arg0: Float2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}