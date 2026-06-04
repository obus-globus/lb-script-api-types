import type { AbstractByte2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ByteAVLTreeMap$Entry extends AbstractByte2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2ByteAVLTreeMap$Entry;
    // private right: Byte2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2ByteAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2ByteAVLTreeMap$Entry;
    left(arg0: Byte2ByteAVLTreeMap$Entry): void;
    next(): Byte2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2ByteAVLTreeMap$Entry;
    right(): Byte2ByteAVLTreeMap$Entry;
    right(arg0: Byte2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}