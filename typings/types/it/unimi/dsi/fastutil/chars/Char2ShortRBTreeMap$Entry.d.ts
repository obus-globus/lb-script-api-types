import type { AbstractChar2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ShortRBTreeMap$Entry extends AbstractChar2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2ShortRBTreeMap$Entry;
    // private right: Char2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2ShortRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2ShortRBTreeMap$Entry;
    left(arg0: Char2ShortRBTreeMap$Entry): void;
    next(): Char2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2ShortRBTreeMap$Entry;
    right(): Char2ShortRBTreeMap$Entry;
    right(arg0: Char2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}