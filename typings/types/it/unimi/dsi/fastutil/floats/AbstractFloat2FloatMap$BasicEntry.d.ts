import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFloat2FloatMap$BasicEntry extends Object implements Float2FloatMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getFloatKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}