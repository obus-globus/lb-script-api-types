import type { Object } from '../../../../java/lang/Object.d.ts'
export class CoverExpressionError extends Object {
    constructor()
    readonly errorMessage: string;
    readonly errorToken: number;
    getErrorMessage(): string;
    getErrorToken(): number;
    hasError(): boolean;
    recordErrorFrom(other: CoverExpressionError): void;
    recordExpressionError(message: string, token: number): void;
    // private shouldRecordError(): boolean;
}