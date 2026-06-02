import type { AbstractChar2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2CharRBTreeMap$Entry extends AbstractChar2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: string)
    // private info: number;
    // private left: Char2CharRBTreeMap$Entry;
    // private right: Char2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2CharRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2CharRBTreeMap$Entry;
    left(arg0: Char2CharRBTreeMap$Entry): void;
    next(): Char2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2CharRBTreeMap$Entry;
    right(): Char2CharRBTreeMap$Entry;
    right(arg0: Char2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Char2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}