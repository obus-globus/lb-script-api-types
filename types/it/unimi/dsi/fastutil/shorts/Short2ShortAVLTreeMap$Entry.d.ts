import type { AbstractShort2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ShortAVLTreeMap$Entry extends AbstractShort2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2ShortAVLTreeMap$Entry;
    // private right: Short2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2ShortAVLTreeMap$Entry;
    left(arg0: Short2ShortAVLTreeMap$Entry): void;
    next(): Short2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2ShortAVLTreeMap$Entry;
    right(): Short2ShortAVLTreeMap$Entry;
    right(arg0: Short2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}