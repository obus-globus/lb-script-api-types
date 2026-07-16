import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Identifier extends Object {
    static split(paramarg0: string): string[];
    constructor(arg0: string[])
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly namespace: string;
    readonly path: string;
    equals(arg0: Object | null): boolean;
    getNamespace(): string;
    getPath(): string;
    hashCode(): number;
    toString(): string;
}