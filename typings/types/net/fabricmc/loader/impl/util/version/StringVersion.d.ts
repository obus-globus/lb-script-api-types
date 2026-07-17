import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../../net/fabricmc/loader/api/Version.d.ts'
export class StringVersion extends Object implements Version {
    constructor(arg0: string)
    // private version: string;
    compareTo(arg0: Version): number;
    equals(arg0: Object | null): boolean;
    getFriendlyString(): string;
    toString(): string;
}