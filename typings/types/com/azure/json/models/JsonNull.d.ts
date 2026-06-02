import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonElement } from '../../../../com/azure/json/models/JsonElement.d.ts'
export class JsonNull extends JsonElement {
    static fromJson(paramarg0: JsonReader): JsonNull;
    static getInstance(): JsonNull;
    private constructor()
    isNull(): boolean;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonString(): string;
}