import type { AbstractFloat2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ShortAVLTreeMap$Entry extends AbstractFloat2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2ShortAVLTreeMap$Entry;
    // private right: Float2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2ShortAVLTreeMap$Entry;
    left(arg0: Float2ShortAVLTreeMap$Entry): void;
    next(): Float2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2ShortAVLTreeMap$Entry;
    right(): Float2ShortAVLTreeMap$Entry;
    right(arg0: Float2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}