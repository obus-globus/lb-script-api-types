import type { JsonOptions } from '../../../../com/azure/json/JsonOptions.d.ts'
import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonToken } from '../../../../com/azure/json/JsonToken.d.ts'
import type { JsonParser } from '../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
export class DefaultJsonReader extends JsonReader {
    static fromBytes(paramarg0: number[], paramarg1: JsonOptions): JsonReader;
    static fromReader(paramarg0: Reader, paramarg1: JsonOptions): JsonReader;
    static fromStream(paramarg0: InputStream, paramarg1: JsonOptions): JsonReader;
    static fromString(paramarg0: string, paramarg1: JsonOptions): JsonReader;
    private constructor(arg0: JsonParser, arg1: boolean, arg2: number[], arg3: string, arg4: JsonOptions)
    private constructor(arg0: JsonParser, arg1: boolean, arg2: number[], arg3: string, arg4: boolean, arg5: boolean)
    // private currentToken: JsonToken;
    // private jsonBytes: number[];
    // private jsonString: string;
    // private jsoncSupported: boolean;
    // private nonNumericNumbersSupported: boolean;
    // private parser: JsonParser;
    readonly resetSupported: boolean;
    bufferObject(): JsonReader;
    close(): void;
    currentToken(): JsonToken;
    getBinary(): number[];
    getBoolean(): boolean;
    getDouble(): number;
    getFieldName(): string;
    getFloat(): number;
    getInt(): number;
    getLong(): number;
    getString(): string;
    isResetSupported(): boolean;
    nextToken(): JsonToken;
    reset(): JsonReader;
    skipChildren(): void;
}