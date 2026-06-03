import type { AbstractInt2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ShortAVLTreeMap$Entry extends AbstractInt2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2ShortAVLTreeMap$Entry;
    // private right: Int2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2ShortAVLTreeMap$Entry;
    left(arg0: Int2ShortAVLTreeMap$Entry): void;
    next(): Int2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2ShortAVLTreeMap$Entry;
    right(): Int2ShortAVLTreeMap$Entry;
    right(arg0: Int2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}