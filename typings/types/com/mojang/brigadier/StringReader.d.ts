import type { ImmutableStringReader } from '../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StringReader extends Object implements ImmutableStringReader {
    static isAllowedInUnquotedString(paramarg0: string): boolean;
    static isAllowedNumber(paramarg0: string): boolean;
    static isQuotedStringStart(paramarg0: string): boolean;
    constructor(arg0: StringReader)
    constructor(arg0: string)
    readonly cursor: number;
    readonly string: string;
    canRead(): boolean;
    canRead(arg0: number): boolean;
    expect(arg0: string): void;
    getCursor(): number;
    getRead(): string;
    getRemaining(): string;
    getRemainingLength(): number;
    getString(): string;
    getTotalLength(): number;
    peek(): string;
    peek(arg0: number): string;
    read(): string;
    readBoolean(): boolean;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readLong(): number;
    readQuotedString(): string;
    readString(): string;
    readStringUntil(arg0: string): string;
    readUnquotedString(): string;
    setCursor(arg0: number): void;
    skip(): void;
    skipWhitespace(): void;
}