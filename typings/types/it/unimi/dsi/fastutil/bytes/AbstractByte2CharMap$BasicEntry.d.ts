import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2CharMap$BasicEntry extends Object implements Byte2CharMap$Entry {
    constructor()
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string)
    key: number;
    value: string;
    equals(arg0: Object | null): boolean;
    getByteKey(): number;
    getCharValue(): string;
    hashCode(): number;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
}