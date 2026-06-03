import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2LongMap$BasicEntry extends Object implements Char2LongMap$Entry {
    constructor()
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number)
    key: string;
    value: number;
    equals(arg0: Object | null): boolean;
    getCharKey(): string;
    getLongValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}