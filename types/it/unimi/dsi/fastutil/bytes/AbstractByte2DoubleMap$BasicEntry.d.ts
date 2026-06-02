import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2DoubleMap$BasicEntry extends Object implements Byte2DoubleMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteKey(): number;
    getDoubleValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}