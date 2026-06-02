import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2ShortMap$BasicEntry extends Object implements Byte2ShortMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteKey(): number;
    getShortValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}