import type { AbstractFloat2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ShortRBTreeMap$Entry extends AbstractFloat2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2ShortRBTreeMap$Entry;
    // private right: Float2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2ShortRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2ShortRBTreeMap$Entry;
    left(arg0: Float2ShortRBTreeMap$Entry): void;
    next(): Float2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2ShortRBTreeMap$Entry;
    right(): Float2ShortRBTreeMap$Entry;
    right(arg0: Float2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}