import type { AbstractByte2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2FloatRBTreeMap$Entry extends AbstractByte2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2FloatRBTreeMap$Entry;
    // private right: Byte2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2FloatRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2FloatRBTreeMap$Entry;
    left(arg0: Byte2FloatRBTreeMap$Entry): void;
    next(): Byte2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2FloatRBTreeMap$Entry;
    right(): Byte2FloatRBTreeMap$Entry;
    right(arg0: Byte2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}