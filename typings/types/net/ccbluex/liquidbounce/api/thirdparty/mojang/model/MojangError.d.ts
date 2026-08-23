import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MojangError extends Record {
    constructor(error: string, errorMessage: string, cause: string | null)
    // private cause: string | null;
    /*not mapped: */ cause(): string | null;
    // private error: string;
    /*not mapped: */ error(): string;
    // private errorMessage: string;
    /*not mapped: */ errorMessage(): string;
    component1(): string;
    component2(): string;
    component3(): string | null;
    copy(error: string, errorMessage: string, cause: string | null): MojangError;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}