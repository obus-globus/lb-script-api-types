import type { Strictness } from '../../../../com/google/gson/Strictness.d.ts'
import type { JsonToken } from '../../../../com/google/gson/stream/JsonToken.d.ts'
import type { MalformedJsonException } from '../../../../com/google/gson/stream/MalformedJsonException.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JsonReader extends Object implements Closeable {
    constructor(arg0: Reader)
    // private buffer: string[];
    // private in: Reader;
    // private limit: number;
    // private lineNumber: number;
    // private lineStart: number;
    readonly nestingLimit: number;
    // private pathIndices: number[];
    // private pathNames: string[];
    // private peeked: number;
    // private peekedLong: number;
    // private peekedNumberLength: number;
    // private peekedString: string;
    // private pos: number;
    // private stack: number[];
    // private stackSize: number;
    readonly strictness: Strictness;
    beginArray(): void;
    beginObject(): void;
    // private checkLenient(): void;
    close(): void;
    // private consumeNonExecutePrefix(): void;
    doPeek(): number;
    endArray(): void;
    endObject(): void;
    // private fillBuffer(arg0: number): boolean;
    getNestingLimit(): number;
    getPath(): string;
    // private getPath(arg0: boolean): string;
    getPreviousPath(): string;
    getStrictness(): Strictness;
    hasNext(): boolean;
    isLenient(): boolean;
    // private isLiteral(arg0: string): boolean;
    locationString(): string;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextInt(): number;
    nextLong(): number;
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
    setLenient(arg0: boolean): void;
    setNestingLimit(arg0: number): void;
    setStrictness(arg0: Strictness): void;
    // private skipQuotedValue(arg0: string): void;
    // private skipTo(arg0: string): boolean;
    // private skipToEndOfLine(): void;
    // private skipUnquotedValue(): void;
    skipValue(): void;
    // private syntaxError(arg0: string): MalformedJsonException;
    toString(): string;
    // private unexpectedTokenError(arg0: string): IllegalStateException;
}