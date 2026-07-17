import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonSerializable } from '../../../../com/azure/json/JsonSerializable.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityErrorResponse extends Object implements JsonSerializable<ManagedIdentityErrorResponse> {
    static fromJson(paramarg0: JsonReader): ManagedIdentityErrorResponse;
    constructor()
    readonly correlationId: string;
    readonly error: string;
    readonly errorDescription: string;
    readonly message: string;
    getCorrelationId(): string;
    getError(): string;
    getErrorDescription(): string;
    getMessage(): string;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonBytes(): number[];
    toJsonString(): string;
}