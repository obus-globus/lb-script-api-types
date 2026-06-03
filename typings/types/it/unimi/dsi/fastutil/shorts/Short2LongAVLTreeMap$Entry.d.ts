import type { AbstractShort2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2LongAVLTreeMap$Entry extends AbstractShort2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2LongAVLTreeMap$Entry;
    // private right: Short2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2LongAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2LongAVLTreeMap$Entry;
    left(arg0: Short2LongAVLTreeMap$Entry): void;
    next(): Short2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2LongAVLTreeMap$Entry;
    right(): Short2LongAVLTreeMap$Entry;
    right(arg0: Short2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}