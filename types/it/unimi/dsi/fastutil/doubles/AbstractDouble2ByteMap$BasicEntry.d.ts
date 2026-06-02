import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2ByteMap$BasicEntry extends Object implements Double2ByteMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    getDoubleKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}