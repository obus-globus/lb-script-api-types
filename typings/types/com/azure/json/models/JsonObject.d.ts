import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonElement } from '../../../../com/azure/json/models/JsonElement.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class JsonObject extends JsonElement {
    static fromJson(paramarg0: JsonReader): JsonObject;
    constructor()
    private constructor(arg0: { [key: string]: JsonElement })
    // private properties: { [key: string]: JsonElement };
    getProperty(arg0: string): JsonElement;
    hasProperty(arg0: string): boolean;
    isObject(): boolean;
    removeProperty(arg0: string): JsonElement;
    setProperty(arg0: string, arg1: JsonElement): JsonObject;
    setProperty(arg0: string, arg1: boolean): JsonObject;
    setProperty(arg0: string, arg1: Number): JsonObject;
    setProperty(arg0: string, arg1: string): JsonObject;
    size(): number;
    toJson(arg0: JsonWriter): JsonWriter;
    toJson(arg0: OutputStream): void;
    toJson(arg0: Writer): void;
    toJsonString(): string;
}