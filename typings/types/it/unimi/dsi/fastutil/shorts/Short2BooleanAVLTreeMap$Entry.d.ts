import type { AbstractShort2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2BooleanAVLTreeMap$Entry extends AbstractShort2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Short2BooleanAVLTreeMap$Entry;
    // private right: Short2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2BooleanAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2BooleanAVLTreeMap$Entry;
    left(arg0: Short2BooleanAVLTreeMap$Entry): void;
    next(): Short2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2BooleanAVLTreeMap$Entry;
    right(): Short2BooleanAVLTreeMap$Entry;
    right(arg0: Short2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Short2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}