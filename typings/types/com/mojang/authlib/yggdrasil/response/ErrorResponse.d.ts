import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ErrorResponse extends Record {
    constructor(path: string, error: string, errorMessage: string, details: { [key: string]: Object })
    // private details: { [key: string]: Object };
    // private error: string;
    // private errorMessage: string;
    // private path: string;
    details(): { [key: string]: Object };
    equals(arg0: Object | null): boolean;
    error(): string;
    errorMessage(): string;
    hashCode(): number;
    path(): string;
    toString(): string;
}