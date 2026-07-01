import type { AbstractFloat2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2BooleanAVLTreeMap$Entry extends AbstractFloat2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Float2BooleanAVLTreeMap$Entry;
    // private right: Float2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2BooleanAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2BooleanAVLTreeMap$Entry;
    left(arg0: Float2BooleanAVLTreeMap$Entry): void;
    next(): Float2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2BooleanAVLTreeMap$Entry;
    right(): Float2BooleanAVLTreeMap$Entry;
    right(arg0: Float2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Float2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}