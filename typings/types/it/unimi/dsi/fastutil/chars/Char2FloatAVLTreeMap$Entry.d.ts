import type { AbstractChar2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2FloatAVLTreeMap$Entry extends AbstractChar2FloatMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2FloatAVLTreeMap$Entry;
    // private right: Char2FloatAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2FloatAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2FloatAVLTreeMap$Entry;
    left(arg0: Char2FloatAVLTreeMap$Entry): void;
    next(): Char2FloatAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2FloatAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2FloatAVLTreeMap$Entry;
    right(): Char2FloatAVLTreeMap$Entry;
    right(arg0: Char2FloatAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2FloatAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}