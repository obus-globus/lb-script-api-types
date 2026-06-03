import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonElement } from '../../../../com/azure/json/models/JsonElement.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
export class JsonNull extends JsonElement {
    static fromJson(paramarg0: JsonReader): JsonNull;
    static getInstance(): JsonNull;
    private constructor()
    isNull(): boolean;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonString(): string;
}