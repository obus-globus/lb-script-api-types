import type { AbstractByte2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2DoubleRBTreeMap$Entry extends AbstractByte2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2DoubleRBTreeMap$Entry;
    // private right: Byte2DoubleRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2DoubleRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2DoubleRBTreeMap$Entry;
    left(arg0: Byte2DoubleRBTreeMap$Entry): void;
    next(): Byte2DoubleRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2DoubleRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2DoubleRBTreeMap$Entry;
    right(): Byte2DoubleRBTreeMap$Entry;
    right(arg0: Byte2DoubleRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2DoubleRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}