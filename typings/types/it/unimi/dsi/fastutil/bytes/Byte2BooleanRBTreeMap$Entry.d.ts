import type { AbstractByte2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2BooleanRBTreeMap$Entry extends AbstractByte2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Byte2BooleanRBTreeMap$Entry;
    // private right: Byte2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2BooleanRBTreeMap$Entry;
    left(arg0: Byte2BooleanRBTreeMap$Entry): void;
    next(): Byte2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2BooleanRBTreeMap$Entry;
    right(): Byte2BooleanRBTreeMap$Entry;
    right(arg0: Byte2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Byte2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}