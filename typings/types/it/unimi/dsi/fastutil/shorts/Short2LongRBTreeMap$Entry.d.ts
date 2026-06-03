import type { AbstractShort2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2LongRBTreeMap$Entry extends AbstractShort2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2LongRBTreeMap$Entry;
    // private right: Short2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2LongRBTreeMap$Entry;
    left(arg0: Short2LongRBTreeMap$Entry): void;
    next(): Short2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2LongRBTreeMap$Entry;
    right(): Short2LongRBTreeMap$Entry;
    right(arg0: Short2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}