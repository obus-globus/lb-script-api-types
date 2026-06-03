import type { AbstractShort2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2FloatAVLTreeMap$Entry extends AbstractShort2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2FloatAVLTreeMap$Entry;
    // private right: Short2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2FloatAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2FloatAVLTreeMap$Entry;
    left(arg0: Short2FloatAVLTreeMap$Entry): void;
    next(): Short2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2FloatAVLTreeMap$Entry;
    right(): Short2FloatAVLTreeMap$Entry;
    right(arg0: Short2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}