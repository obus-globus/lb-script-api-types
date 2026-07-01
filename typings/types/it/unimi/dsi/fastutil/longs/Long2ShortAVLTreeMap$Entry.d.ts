import type { AbstractLong2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ShortAVLTreeMap$Entry extends AbstractLong2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2ShortAVLTreeMap$Entry;
    // private right: Long2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2ShortAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2ShortAVLTreeMap$Entry;
    left(arg0: Long2ShortAVLTreeMap$Entry): void;
    next(): Long2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2ShortAVLTreeMap$Entry;
    right(): Long2ShortAVLTreeMap$Entry;
    right(arg0: Long2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}