import type { AbstractShort2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2DoubleRBTreeMap$Entry extends AbstractShort2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2DoubleRBTreeMap$Entry;
    // private right: Short2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2DoubleRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2DoubleRBTreeMap$Entry;
    left(arg0: Short2DoubleRBTreeMap$Entry): void;
    next(): Short2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2DoubleRBTreeMap$Entry;
    right(): Short2DoubleRBTreeMap$Entry;
    right(arg0: Short2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}