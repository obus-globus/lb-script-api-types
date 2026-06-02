import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFloat2ByteMap$BasicEntry extends Object implements Float2ByteMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    getFloatKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}