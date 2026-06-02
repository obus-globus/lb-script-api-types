import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2BooleanMap$BasicEntry extends Object implements Byte2BooleanMap$Entry {
    constructor()
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean)
    key: number;
    value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    getByteKey(): number;
    hashCode(): number;
    setValue(arg0: boolean): boolean;
    setValue(arg0: boolean): boolean;
    toString(): string;
}