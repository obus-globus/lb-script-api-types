import type { KeyOperation } from '../../../../io/jsonwebtoken/security/KeyOperation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultKeyOperation extends Object implements KeyOperation {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string, arg2: string[])
    readonly description: string;
    readonly id: string;
    // private related: string[];
    equals(arg0: Object | null): boolean;
    getDescription(): string;
    getId(): string;
    hashCode(): number;
    isRelated(arg0: KeyOperation): boolean;
    toString(): string;
}