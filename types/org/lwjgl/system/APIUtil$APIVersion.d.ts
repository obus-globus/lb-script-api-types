import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class APIUtil$APIVersion extends Object implements Comparable<APIUtil$APIVersion> {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: string, arg3: string)
    implementation: string;
    major: number;
    minor: number;
    revision: string;
    compareTo(arg0: APIUtil$APIVersion): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}