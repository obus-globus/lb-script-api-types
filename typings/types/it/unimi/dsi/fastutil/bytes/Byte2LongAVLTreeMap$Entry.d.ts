import type { AbstractByte2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2LongAVLTreeMap$Entry extends AbstractByte2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2LongAVLTreeMap$Entry;
    // private right: Byte2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2LongAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2LongAVLTreeMap$Entry;
    left(arg0: Byte2LongAVLTreeMap$Entry): void;
    next(): Byte2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2LongAVLTreeMap$Entry;
    right(): Byte2LongAVLTreeMap$Entry;
    right(arg0: Byte2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}