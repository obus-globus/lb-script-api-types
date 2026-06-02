import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { JsonElement } from '../../../../com/azure/json/models/JsonElement.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class JsonArray extends JsonElement {
    static fromJson(paramarg0: JsonReader): JsonArray;
    constructor()
    private constructor(arg0: JsonElement[])
    // private elements: JsonElement[];
    addElement(arg0: JsonElement): JsonArray;
    addElement(arg0: boolean): JsonArray;
    addElement(arg0: number, arg1: JsonElement): JsonArray;
    addElement(arg0: number, arg1: boolean): JsonArray;
    addElement(arg0: number, arg1: Number): JsonArray;
    addElement(arg0: number, arg1: string): JsonArray;
    addElement(arg0: Number): JsonArray;
    addElement(arg0: string): JsonArray;
    getElement(arg0: number): JsonElement;
    isArray(): boolean;
    removeElement(arg0: number): JsonElement;
    setElement(arg0: number, arg1: JsonElement): JsonArray;
    setElement(arg0: number, arg1: boolean): JsonArray;
    setElement(arg0: number, arg1: Number): JsonArray;
    setElement(arg0: number, arg1: string): JsonArray;
    size(): number;
    toJson(arg0: JsonWriter): JsonWriter;
    toJsonString(): string;
}