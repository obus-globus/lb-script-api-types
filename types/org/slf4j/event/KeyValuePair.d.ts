import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyValuePair extends Object {
    constructor(arg0: string, arg1: Object)
    key: string;
    value: Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}