import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NamedInteger extends Object implements Serializable {
    constructor(arg0: number)
    constructor(arg0: string, arg1: number)
    // private id: number;
    // private name: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    value(): number;
}