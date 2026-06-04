import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2BooleanMap$BasicEntry extends Object implements Char2BooleanMap$Entry {
    constructor()
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean)
    key: string;
    value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    getCharKey(): string;
    hashCode(): number;
    setValue(arg0: boolean): boolean;
    toString(): string;
}