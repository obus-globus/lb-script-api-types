import type { AbstractFloat2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2LongAVLTreeMap$Entry extends AbstractFloat2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2LongAVLTreeMap$Entry;
    // private right: Float2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2LongAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2LongAVLTreeMap$Entry;
    left(arg0: Float2LongAVLTreeMap$Entry): void;
    next(): Float2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2LongAVLTreeMap$Entry;
    right(): Float2LongAVLTreeMap$Entry;
    right(arg0: Float2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}