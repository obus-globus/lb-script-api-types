import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2ShortMap$BasicEntry extends Object implements Char2ShortMap$Entry {
    constructor()
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number)
    key: string;
    value: number;
    equals(arg0: Object | null): boolean;
    getCharKey(): string;
    getShortValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}