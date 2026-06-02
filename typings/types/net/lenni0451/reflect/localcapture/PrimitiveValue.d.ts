import type { Object } from '../../../../java/lang/Object.d.ts'
export class PrimitiveValue extends Object {
    constructor(arg0: number, arg1: number)
    readonly size: number;
    readonly value: number;
    asBoolean(): boolean;
    asByte(): number;
    asChar(): string;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    getSize(): number;
    getValue(): number;
    toString(): string;
}