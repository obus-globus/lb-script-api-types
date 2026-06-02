import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpHeader extends Object {
    constructor(arg0: string, arg1: string)
    readonly name: string;
    readonly value: string;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getValue(): string;
    hashCode(): number;
    toString(): string;
}