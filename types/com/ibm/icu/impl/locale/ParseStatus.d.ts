import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParseStatus extends Object {
    constructor()
    // private _errorIndex: number;
    // private _errorMsg: string;
    // private _parseLength: number;
    getErrorIndex(): number;
    getErrorMessage(): string;
    getParseLength(): number;
    isError(): boolean;
    reset(): void;
}