import type { AbstractInt2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ShortRBTreeMap$Entry extends AbstractInt2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2ShortRBTreeMap$Entry;
    // private right: Int2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2ShortRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2ShortRBTreeMap$Entry;
    left(arg0: Int2ShortRBTreeMap$Entry): void;
    next(): Int2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2ShortRBTreeMap$Entry;
    right(): Int2ShortRBTreeMap$Entry;
    right(arg0: Int2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}