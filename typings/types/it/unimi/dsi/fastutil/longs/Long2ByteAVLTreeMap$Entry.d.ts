import type { AbstractLong2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ByteAVLTreeMap$Entry extends AbstractLong2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2ByteAVLTreeMap$Entry;
    // private right: Long2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2ByteAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2ByteAVLTreeMap$Entry;
    left(arg0: Long2ByteAVLTreeMap$Entry): void;
    next(): Long2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2ByteAVLTreeMap$Entry;
    right(): Long2ByteAVLTreeMap$Entry;
    right(arg0: Long2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}