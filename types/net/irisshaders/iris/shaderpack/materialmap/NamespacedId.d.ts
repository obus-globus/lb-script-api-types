import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NamespacedId extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly name: string;
    readonly namespace: string;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getNamespace(): string;
    hashCode(): number;
    toString(): string;
}