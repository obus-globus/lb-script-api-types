import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ErrorResponse extends Record {
    constructor(path: string, error: string, errorMessage: string, details: JavaMap<string, Object>)
    // private details: JavaMap<string, Object>;
    // private error: string;
    // private errorMessage: string;
    // private path: string;
    details(): JavaMap<string, Object>;
    equals(arg0: Object | null): boolean;
    error(): string;
    errorMessage(): string;
    hashCode(): number;
    path(): string;
    toString(): string;
}