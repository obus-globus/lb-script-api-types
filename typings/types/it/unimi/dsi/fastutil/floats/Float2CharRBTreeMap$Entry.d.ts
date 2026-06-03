import type { AbstractFloat2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2CharRBTreeMap$Entry extends AbstractFloat2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Float2CharRBTreeMap$Entry;
    // private right: Float2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2CharRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2CharRBTreeMap$Entry;
    left(arg0: Float2CharRBTreeMap$Entry): void;
    next(): Float2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2CharRBTreeMap$Entry;
    right(): Float2CharRBTreeMap$Entry;
    right(arg0: Float2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Float2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}