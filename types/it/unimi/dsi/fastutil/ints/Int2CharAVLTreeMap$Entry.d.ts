import type { AbstractInt2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2CharAVLTreeMap$Entry extends AbstractInt2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Int2CharAVLTreeMap$Entry;
    // private right: Int2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2CharAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2CharAVLTreeMap$Entry;
    left(arg0: Int2CharAVLTreeMap$Entry): void;
    next(): Int2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2CharAVLTreeMap$Entry;
    right(): Int2CharAVLTreeMap$Entry;
    right(arg0: Int2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Int2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}