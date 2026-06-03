import type { AbstractShort2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2DoubleAVLTreeMap$Entry extends AbstractShort2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2DoubleAVLTreeMap$Entry;
    // private right: Short2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2DoubleAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2DoubleAVLTreeMap$Entry;
    left(arg0: Short2DoubleAVLTreeMap$Entry): void;
    next(): Short2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2DoubleAVLTreeMap$Entry;
    right(): Short2DoubleAVLTreeMap$Entry;
    right(arg0: Short2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}