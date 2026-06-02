import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StringReader_v1_12 extends Object {
    constructor(arg0: string)
    readonly index: number;
    // private s: string;
    canRead(): boolean;
    canRead(arg0: number): boolean;
    charAt(arg0: number): string;
    getIndex(): number;
    getString(): string;
    // private isAlphanumeric(arg0: string): boolean;
    // private isNumerical(arg0: string): boolean;
    isQuote(arg0: string): boolean;
    jumpTo(arg0: string): void;
    peek(): string;
    read(): string;
    readDouble(): number;
    readInt(): number;
    readQuotedString(): string;
    readString(): string;
    readUnquotedString(): string;
    skip(): void;
    skipWhitespaces(): void;
}