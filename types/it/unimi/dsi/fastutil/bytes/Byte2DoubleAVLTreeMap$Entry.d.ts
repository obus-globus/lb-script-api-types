import type { AbstractByte2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2DoubleAVLTreeMap$Entry extends AbstractByte2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2DoubleAVLTreeMap$Entry;
    // private right: Byte2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2DoubleAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2DoubleAVLTreeMap$Entry;
    left(arg0: Byte2DoubleAVLTreeMap$Entry): void;
    next(): Byte2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2DoubleAVLTreeMap$Entry;
    right(): Byte2DoubleAVLTreeMap$Entry;
    right(arg0: Byte2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}