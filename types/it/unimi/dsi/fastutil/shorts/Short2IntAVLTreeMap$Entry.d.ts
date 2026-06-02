import type { AbstractShort2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2IntAVLTreeMap$Entry extends AbstractShort2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2IntAVLTreeMap$Entry;
    // private right: Short2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2IntAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2IntAVLTreeMap$Entry;
    left(arg0: Short2IntAVLTreeMap$Entry): void;
    next(): Short2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2IntAVLTreeMap$Entry;
    right(): Short2IntAVLTreeMap$Entry;
    right(arg0: Short2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}