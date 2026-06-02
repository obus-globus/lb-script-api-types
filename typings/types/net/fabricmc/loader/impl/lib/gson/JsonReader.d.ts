import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JsonToken } from '../../../../../../net/fabricmc/loader/impl/lib/gson/JsonToken.d.ts'
export class JsonReader extends Object implements Closeable {
    constructor(arg0: Reader)
    // private buffer: string[];
    // private in: Reader;
    // private lenient: boolean;
    // private limit: number;
    readonly lineNumber: number;
    // private lineStart: number;
    // private pathIndices: number[];
    // private pathNames: string[];
    // private peeked: number;
    // private peekedLong: number;
    // private peekedNumberLength: number;
    // private peekedString: string;
    // private pos: number;
    readonly rewindEnabled: boolean;
    // private stack: number[];
    // private stackSize: number;
    beginArray(): void;
    beginObject(): void;
    // private checkLenient(): void;
    close(): void;
    // private consumeNonExecutePrefix(): void;
    doPeek(): number;
    endArray(): void;
    endObject(): void;
    // private fillBuffer(arg0: number): boolean;
    getColumn(): number;
    getLineNumber(): number;
    getPath(): string;
    hasNext(): boolean;
    // private isLiteral(arg0: string): boolean;
    locationString(): string;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextInt(): number;
    nextName(): string;
    // private nextNonWhitespace(arg0: boolean): number;
    nextNull(): void;
    // private nextQuotedValue(arg0: string): string;
    nextString(): string;
    // private nextUnquotedValue(): string;
    peek(): JsonToken;
    // private peekKeyword(): number;
    // private peekNumber(): number;
    // private push(arg0: number): void;
    // private readEscapeCharacter(): string;
    rewind(): void;
    setRewindEnabled(arg0: boolean): void;
    // private skipQuotedValue(arg0: string): void;
    // private skipTo(arg0: string): boolean;
    // private skipToEndOfLine(): void;
    // private skipUnquotedValue(): void;
    skipValue(): void;
    // private syntaxError(arg0: string): IOException;
    toString(): string;
}