import type { Object } from '../../java/lang/Object.d.ts'
export class KeyValuePair extends Object {
    static valueOf(paramarg0: string): KeyValuePair;
    private constructor(arg0: string, arg1: string)
    key: string;
    value: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}