import type { Object } from '../../java/lang/Object.d.ts'
export abstract class AttributeValue extends Object {
    constructor(arg0: number, arg1: string[])
    // private names: string[];
    // private value: number;
    hashCode(): number;
    toString(): string;
}