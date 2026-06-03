import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonElement } from '../../../../com/azure/json/models/JsonElement.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
export class JsonBoolean extends JsonElement {
    static fromJson(paramarg0: JsonReader): JsonBoolean;
    static getInstance(paramarg0: boolean): JsonBoolean;
    private constructor(arg0: boolean)
    readonly value: boolean;
    getValue(): boolean;
    isBoolean(): boolean;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonString(): string;
}