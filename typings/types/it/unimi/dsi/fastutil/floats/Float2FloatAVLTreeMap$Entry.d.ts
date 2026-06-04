import type { AbstractFloat2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2FloatAVLTreeMap$Entry extends AbstractFloat2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2FloatAVLTreeMap$Entry;
    // private right: Float2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2FloatAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2FloatAVLTreeMap$Entry;
    left(arg0: Float2FloatAVLTreeMap$Entry): void;
    next(): Float2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2FloatAVLTreeMap$Entry;
    right(): Float2FloatAVLTreeMap$Entry;
    right(arg0: Float2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}