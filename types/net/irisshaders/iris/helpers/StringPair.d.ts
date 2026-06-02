import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringPair extends Record {
    constructor(key: string, value: string)
    // private key: string;
    // private value: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): string;
    toString(): string;
    value(): string;
}