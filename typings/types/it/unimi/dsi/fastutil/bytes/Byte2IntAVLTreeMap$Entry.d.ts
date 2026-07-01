import type { AbstractByte2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2IntAVLTreeMap$Entry extends AbstractByte2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2IntAVLTreeMap$Entry;
    // private right: Byte2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2IntAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2IntAVLTreeMap$Entry;
    left(arg0: Byte2IntAVLTreeMap$Entry): void;
    next(): Byte2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2IntAVLTreeMap$Entry;
    right(): Byte2IntAVLTreeMap$Entry;
    right(arg0: Byte2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}