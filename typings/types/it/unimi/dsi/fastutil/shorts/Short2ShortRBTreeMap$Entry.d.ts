import type { AbstractShort2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ShortRBTreeMap$Entry extends AbstractShort2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2ShortRBTreeMap$Entry;
    // private right: Short2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2ShortRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2ShortRBTreeMap$Entry;
    left(arg0: Short2ShortRBTreeMap$Entry): void;
    next(): Short2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2ShortRBTreeMap$Entry;
    right(): Short2ShortRBTreeMap$Entry;
    right(arg0: Short2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}