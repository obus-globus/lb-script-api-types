import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2ByteMap$BasicEntry extends Object implements Char2ByteMap$Entry {
    constructor()
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number)
    key: string;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    getCharKey(): string;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}