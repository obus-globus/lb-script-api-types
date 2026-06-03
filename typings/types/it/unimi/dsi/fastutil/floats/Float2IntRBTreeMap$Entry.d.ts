import type { AbstractFloat2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2IntRBTreeMap$Entry extends AbstractFloat2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2IntRBTreeMap$Entry;
    // private right: Float2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2IntRBTreeMap$Entry;
    left(arg0: Float2IntRBTreeMap$Entry): void;
    next(): Float2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2IntRBTreeMap$Entry;
    right(): Float2IntRBTreeMap$Entry;
    right(arg0: Float2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}