import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KeyPrefixParts extends Object {
    constructor(prefix: string, typed: string)
    readonly prefix: string;
    readonly typed: string;
    component1(): string;
    component2(): string;
    copy(prefix: string, typed: string): KeyPrefixParts;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}