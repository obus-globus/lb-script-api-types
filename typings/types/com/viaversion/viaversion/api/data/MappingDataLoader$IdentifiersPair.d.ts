import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MappingDataLoader$IdentifiersPair extends Record {
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: string[])
    constructor(unmapped: string[], mapped: string[], identity: boolean)
    // private identity: boolean;
    // private mapped: string[];
    // private unmapped: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identity(): boolean;
    mapped(): string[];
    toString(): string;
    unmapped(): string[];
}