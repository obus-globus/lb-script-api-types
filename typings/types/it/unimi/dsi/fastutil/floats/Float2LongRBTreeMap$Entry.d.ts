import type { AbstractFloat2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2LongRBTreeMap$Entry extends AbstractFloat2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2LongRBTreeMap$Entry;
    // private right: Float2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2LongRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2LongRBTreeMap$Entry;
    left(arg0: Float2LongRBTreeMap$Entry): void;
    next(): Float2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2LongRBTreeMap$Entry;
    right(): Float2LongRBTreeMap$Entry;
    right(arg0: Float2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}