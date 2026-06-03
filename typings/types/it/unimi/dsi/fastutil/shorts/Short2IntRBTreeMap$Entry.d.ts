import type { AbstractShort2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2IntRBTreeMap$Entry extends AbstractShort2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2IntRBTreeMap$Entry;
    // private right: Short2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2IntRBTreeMap$Entry;
    left(arg0: Short2IntRBTreeMap$Entry): void;
    next(): Short2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2IntRBTreeMap$Entry;
    right(): Short2IntRBTreeMap$Entry;
    right(arg0: Short2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}