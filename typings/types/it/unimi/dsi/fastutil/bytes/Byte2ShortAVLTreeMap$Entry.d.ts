import type { AbstractByte2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ShortAVLTreeMap$Entry extends AbstractByte2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2ShortAVLTreeMap$Entry;
    // private right: Byte2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2ShortAVLTreeMap$Entry;
    left(arg0: Byte2ShortAVLTreeMap$Entry): void;
    next(): Byte2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2ShortAVLTreeMap$Entry;
    right(): Byte2ShortAVLTreeMap$Entry;
    right(arg0: Byte2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}