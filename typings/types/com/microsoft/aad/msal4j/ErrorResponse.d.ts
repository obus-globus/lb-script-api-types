import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ErrorResponse extends Object implements JsonSerializable<ErrorResponse> {
    static fromJson<T extends JsonSerializable<T>>(paramarg0: number[]): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: JsonReader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: InputStream): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: Reader): T;
    static fromJson<T extends JsonSerializable<T>>(paramarg0: string): T;
    constructor()
    // private claims: string;
    // private correlation_id: string;
    // private error: string;
    // private errorCodes: number[];
    // private errorDescription: string;
    // private statusCode: number;
    // private statusMessage: string;
    // private subError: string;
    // private timestamp: string;
    // private traceId: string;
    claims(): string;
    claims(arg0: string): void;
    correlation_id(): string;
    correlation_id(arg0: string): void;
    error(): string;
    error(arg0: string): void;
    errorCodes(): number[];
    errorCodes(arg0: number[]): void;
    errorDescription(): string;
    errorDescription(arg0: string): void;
    statusCode(): number;
    statusCode(arg0: number): void;
    statusMessage(): string;
    statusMessage(arg0: string): void;
    subError(): string;
    subError(arg0: string): void;
    timestamp(): string;
    timestamp(arg0: string): void;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
    traceId(): string;
    traceId(arg0: string): void;
}