import type { JsonToken } from '../../../com/azure/json/JsonToken.d.ts'
import type { ReadValueCallback } from '../../../com/azure/json/ReadValueCallback.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class JsonReader extends Object implements Closeable {
    constructor()
    // private appendJson(arg0: StringBuilder, arg1: JsonToken): void;
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
    getNullable<T extends Object | number | string | boolean>(arg0: (param0: JsonReader) => T): T;
    getRawText(): string;
    getString(): string;
    getText(): string;
    // private getTextInternal(arg0: boolean): string;
    isEndArrayOrObject(): boolean;
    isResetSupported(): boolean;
    isStartArrayOrObject(): boolean;
    nextToken(): JsonToken;
    readArray(arg0: (param0: JsonReader) => T): T[];
    readChildren(): string;
    readChildren(arg0: StringBuilder): void;
    // private readInternal(arg0: StringBuilder, arg1: boolean, arg2: boolean): StringBuilder;
    readMap(arg0: (param0: JsonReader) => T): { [key: string]: T };
    // private readMapOrObject<T extends Object | number | string | boolean>(arg0: (param0: JsonReader) => T, arg1: boolean): T;
    readObject<T extends Object | number | string | boolean>(arg0: (param0: JsonReader) => T): T;
    readRemainingFieldsAsJsonObject(): string;
    readRemainingFieldsAsJsonObject(arg0: StringBuilder): void;
    readUntyped(): Object;
    // private readUntypedHelper(arg0: number): Object;
    reset(): JsonReader;
    skipChildren(): void;
}