import type { AbstractByte2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2FloatAVLTreeMap$Entry extends AbstractByte2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2FloatAVLTreeMap$Entry;
    // private right: Byte2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2FloatAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2FloatAVLTreeMap$Entry;
    left(arg0: Byte2FloatAVLTreeMap$Entry): void;
    next(): Byte2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2FloatAVLTreeMap$Entry;
    right(): Byte2FloatAVLTreeMap$Entry;
    right(arg0: Byte2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}