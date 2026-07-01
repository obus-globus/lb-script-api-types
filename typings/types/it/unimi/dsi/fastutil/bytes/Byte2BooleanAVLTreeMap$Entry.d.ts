import type { AbstractByte2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2BooleanAVLTreeMap$Entry extends AbstractByte2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: boolean)
    // private info: number;
    // private left: Byte2BooleanAVLTreeMap$Entry;
    // private right: Byte2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2BooleanAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2BooleanAVLTreeMap$Entry;
    left(arg0: Byte2BooleanAVLTreeMap$Entry): void;
    next(): Byte2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2BooleanAVLTreeMap$Entry;
    right(): Byte2BooleanAVLTreeMap$Entry;
    right(arg0: Byte2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Byte2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}