import type { AbstractInt2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2FloatAVLTreeMap$Entry extends AbstractInt2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2FloatAVLTreeMap$Entry;
    // private right: Int2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2FloatAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2FloatAVLTreeMap$Entry;
    left(arg0: Int2FloatAVLTreeMap$Entry): void;
    next(): Int2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2FloatAVLTreeMap$Entry;
    right(): Int2FloatAVLTreeMap$Entry;
    right(arg0: Int2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}