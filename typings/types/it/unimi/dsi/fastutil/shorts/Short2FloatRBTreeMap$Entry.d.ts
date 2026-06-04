import type { AbstractShort2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2FloatRBTreeMap$Entry extends AbstractShort2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2FloatRBTreeMap$Entry;
    // private right: Short2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2FloatRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2FloatRBTreeMap$Entry;
    left(arg0: Short2FloatRBTreeMap$Entry): void;
    next(): Short2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2FloatRBTreeMap$Entry;
    right(): Short2FloatRBTreeMap$Entry;
    right(arg0: Short2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}