import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Attribute extends Object implements Serializable {
    constructor(arg0: string, arg1: Object)
    readonly name: string;
    readonly value: Object;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getValue(): Object;
    hashCode(): number;
    toString(): string;
}