import type { AbstractByte2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ByteRBTreeMap$Entry extends AbstractByte2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2ByteRBTreeMap$Entry;
    // private right: Byte2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2ByteRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2ByteRBTreeMap$Entry;
    left(arg0: Byte2ByteRBTreeMap$Entry): void;
    next(): Byte2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2ByteRBTreeMap$Entry;
    right(): Byte2ByteRBTreeMap$Entry;
    right(arg0: Byte2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}