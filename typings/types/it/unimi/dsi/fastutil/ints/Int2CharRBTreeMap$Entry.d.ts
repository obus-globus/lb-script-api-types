import type { AbstractInt2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2CharRBTreeMap$Entry extends AbstractInt2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Int2CharRBTreeMap$Entry;
    // private right: Int2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2CharRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2CharRBTreeMap$Entry;
    left(arg0: Int2CharRBTreeMap$Entry): void;
    next(): Int2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2CharRBTreeMap$Entry;
    right(): Int2CharRBTreeMap$Entry;
    right(arg0: Int2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Int2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}