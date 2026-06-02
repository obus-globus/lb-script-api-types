import type { AbstractLong2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2CharAVLTreeMap$Entry extends AbstractLong2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Long2CharAVLTreeMap$Entry;
    // private right: Long2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2CharAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2CharAVLTreeMap$Entry;
    left(arg0: Long2CharAVLTreeMap$Entry): void;
    next(): Long2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2CharAVLTreeMap$Entry;
    right(): Long2CharAVLTreeMap$Entry;
    right(arg0: Long2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Long2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}