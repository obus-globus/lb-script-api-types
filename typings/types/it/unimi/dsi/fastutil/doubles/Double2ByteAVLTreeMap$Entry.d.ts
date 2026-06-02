import type { AbstractDouble2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ByteAVLTreeMap$Entry extends AbstractDouble2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2ByteAVLTreeMap$Entry;
    // private right: Double2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2ByteAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2ByteAVLTreeMap$Entry;
    left(arg0: Double2ByteAVLTreeMap$Entry): void;
    next(): Double2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2ByteAVLTreeMap$Entry;
    right(): Double2ByteAVLTreeMap$Entry;
    right(arg0: Double2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}