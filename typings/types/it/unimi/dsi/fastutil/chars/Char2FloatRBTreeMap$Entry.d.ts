import type { AbstractChar2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2FloatRBTreeMap$Entry extends AbstractChar2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2FloatRBTreeMap$Entry;
    // private right: Char2FloatRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2FloatRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2FloatRBTreeMap$Entry;
    left(arg0: Char2FloatRBTreeMap$Entry): void;
    next(): Char2FloatRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2FloatRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2FloatRBTreeMap$Entry;
    right(): Char2FloatRBTreeMap$Entry;
    right(arg0: Char2FloatRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2FloatRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}