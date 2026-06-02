import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Name extends Object {
    constructor(arg0: string, arg1: number)
    // private _hashCode: number;
    // private _name: string;
    equals(arg0: Object | null): boolean;
    equals(arg0: number): boolean;
    equals(arg0: number, arg1: number): boolean;
    equals(arg0: number, arg1: number, arg2: number): boolean;
    equals(arg0: number[], arg1: number): boolean;
    getName(): string;
    hashCode(): number;
    toString(): string;
}