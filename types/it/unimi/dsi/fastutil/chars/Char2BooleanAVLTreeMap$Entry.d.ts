import type { AbstractChar2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2BooleanAVLTreeMap$Entry extends AbstractChar2BooleanMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: boolean)
    // private info: number;
    // private left: Char2BooleanAVLTreeMap$Entry;
    // private right: Char2BooleanAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2BooleanAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2BooleanAVLTreeMap$Entry;
    left(arg0: Char2BooleanAVLTreeMap$Entry): void;
    next(): Char2BooleanAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2BooleanAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2BooleanAVLTreeMap$Entry;
    right(): Char2BooleanAVLTreeMap$Entry;
    right(arg0: Char2BooleanAVLTreeMap$Entry): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Char2BooleanAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}