import type { AbstractByte2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2IntRBTreeMap$Entry extends AbstractByte2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2IntRBTreeMap$Entry;
    // private right: Byte2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2IntRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2IntRBTreeMap$Entry;
    left(arg0: Byte2IntRBTreeMap$Entry): void;
    next(): Byte2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2IntRBTreeMap$Entry;
    right(): Byte2IntRBTreeMap$Entry;
    right(arg0: Byte2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}