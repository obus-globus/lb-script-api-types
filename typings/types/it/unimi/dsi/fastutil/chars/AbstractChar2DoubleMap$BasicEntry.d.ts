import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2DoubleMap$BasicEntry extends Object implements Char2DoubleMap$Entry {
    constructor()
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number)
    key: string;
    value: number;
    equals(arg0: Object | null): boolean;
    getCharKey(): string;
    getDoubleValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}