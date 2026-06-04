import type { AbstractChar2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2LongRBTreeMap$Entry extends AbstractChar2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2LongRBTreeMap$Entry;
    // private right: Char2LongRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2LongRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2LongRBTreeMap$Entry;
    left(arg0: Char2LongRBTreeMap$Entry): void;
    next(): Char2LongRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2LongRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2LongRBTreeMap$Entry;
    right(): Char2LongRBTreeMap$Entry;
    right(arg0: Char2LongRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2LongRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}