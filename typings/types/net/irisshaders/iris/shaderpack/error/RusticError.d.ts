import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RusticError extends Record {
    constructor(severity: string, message: string, detailMessage: string, file: string, lineNumber: number, badLine: string)
    // private badLine: string;
    // private detailMessage: string;
    // private file: string;
    // private lineNumber: number;
    // private message: string;
    // private severity: string;
    badLine(): string;
    detailMessage(): string;
    equals(arg0: Object | null): boolean;
    file(): string;
    hashCode(): number;
    lineNumber(): number;
    message(): string;
    severity(): string;
    toString(): string;
}