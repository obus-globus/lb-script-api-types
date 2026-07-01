import type { AbstractFloat2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2IntAVLTreeMap$Entry extends AbstractFloat2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2IntAVLTreeMap$Entry;
    // private right: Float2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2IntAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2IntAVLTreeMap$Entry;
    left(arg0: Float2IntAVLTreeMap$Entry): void;
    next(): Float2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2IntAVLTreeMap$Entry;
    right(): Float2IntAVLTreeMap$Entry;
    right(arg0: Float2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}