import type { AbstractByte2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2LongRBTreeMap$Entry extends AbstractByte2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2LongRBTreeMap$Entry;
    // private right: Byte2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2LongRBTreeMap$Entry;
    left(arg0: Byte2LongRBTreeMap$Entry): void;
    next(): Byte2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2LongRBTreeMap$Entry;
    right(): Byte2LongRBTreeMap$Entry;
    right(arg0: Byte2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}