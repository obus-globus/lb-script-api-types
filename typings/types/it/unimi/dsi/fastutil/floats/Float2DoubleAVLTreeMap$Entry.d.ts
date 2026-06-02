import type { AbstractFloat2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2DoubleAVLTreeMap$Entry extends AbstractFloat2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2DoubleAVLTreeMap$Entry;
    // private right: Float2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2DoubleAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2DoubleAVLTreeMap$Entry;
    left(arg0: Float2DoubleAVLTreeMap$Entry): void;
    next(): Float2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2DoubleAVLTreeMap$Entry;
    right(): Float2DoubleAVLTreeMap$Entry;
    right(arg0: Float2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}