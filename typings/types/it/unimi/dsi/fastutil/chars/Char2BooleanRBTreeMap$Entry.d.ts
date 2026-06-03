import type { AbstractChar2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2BooleanRBTreeMap$Entry extends AbstractChar2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: boolean)
    // private info: number;
    // private left: Char2BooleanRBTreeMap$Entry;
    // private right: Char2BooleanRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2BooleanRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2BooleanRBTreeMap$Entry;
    left(arg0: Char2BooleanRBTreeMap$Entry): void;
    next(): Char2BooleanRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2BooleanRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2BooleanRBTreeMap$Entry;
    right(): Char2BooleanRBTreeMap$Entry;
    right(arg0: Char2BooleanRBTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Char2BooleanRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}