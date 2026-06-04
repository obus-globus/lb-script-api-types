import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2CharMap$BasicEntry extends Object implements Char2CharMap$Entry {
    constructor()
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string)
    key: string;
    value: string;
    equals(arg0: Object | null): boolean;
    getCharKey(): string;
    getCharValue(): string;
    hashCode(): number;
    setValue(arg0: string): string;
    toString(): string;
}