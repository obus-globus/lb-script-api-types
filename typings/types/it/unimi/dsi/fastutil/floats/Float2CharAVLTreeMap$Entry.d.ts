import type { AbstractFloat2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2CharAVLTreeMap$Entry extends AbstractFloat2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Float2CharAVLTreeMap$Entry;
    // private right: Float2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2CharAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2CharAVLTreeMap$Entry;
    left(arg0: Float2CharAVLTreeMap$Entry): void;
    next(): Float2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2CharAVLTreeMap$Entry;
    right(): Float2CharAVLTreeMap$Entry;
    right(arg0: Float2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Float2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}