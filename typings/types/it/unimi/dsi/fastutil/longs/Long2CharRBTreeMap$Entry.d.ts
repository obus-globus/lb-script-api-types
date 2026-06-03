import type { AbstractLong2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2CharRBTreeMap$Entry extends AbstractLong2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Long2CharRBTreeMap$Entry;
    // private right: Long2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2CharRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2CharRBTreeMap$Entry;
    left(arg0: Long2CharRBTreeMap$Entry): void;
    next(): Long2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2CharRBTreeMap$Entry;
    right(): Long2CharRBTreeMap$Entry;
    right(arg0: Long2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Long2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}