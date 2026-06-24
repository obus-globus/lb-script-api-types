import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UploadResult extends Record {
    constructor(statusCode: number, errorMessage: string)
    // private errorMessage: string;
    // private statusCode: number;
    equals(o: Object | null): boolean;
    errorMessage(): string;
    getSimplifiedErrorMessage(): string;
    hashCode(): number;
    statusCode(): number;
    toString(): string;
}