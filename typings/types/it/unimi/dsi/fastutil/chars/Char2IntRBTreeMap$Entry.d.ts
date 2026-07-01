import type { AbstractChar2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2IntRBTreeMap$Entry extends AbstractChar2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2IntRBTreeMap$Entry;
    // private right: Char2IntRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2IntRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2IntRBTreeMap$Entry;
    left(arg0: Char2IntRBTreeMap$Entry): void;
    next(): Char2IntRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2IntRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2IntRBTreeMap$Entry;
    right(): Char2IntRBTreeMap$Entry;
    right(arg0: Char2IntRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2IntRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}