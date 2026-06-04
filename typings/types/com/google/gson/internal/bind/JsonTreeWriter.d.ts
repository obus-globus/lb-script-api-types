import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class JsonTreeWriter extends JsonWriter {
    constructor()
    // private pendingName: string;
    // private product: JsonElement;
    // private stack: JsonElement[];
    beginArray(): JsonWriter;
    beginObject(): JsonWriter;
    close(): void;
    endArray(): JsonWriter;
    endObject(): JsonWriter;
    flush(): void;
    get(): JsonElement;
    jsonValue(arg0: string): JsonWriter;
    name(arg0: string): JsonWriter;
    nullValue(): JsonWriter;
    // private peek(): JsonElement;
    // private put(arg0: JsonElement): void;
    value(arg0: boolean): JsonWriter;
    value(arg0: number): JsonWriter;
    value(arg0: Number): JsonWriter;
    value(arg0: string): JsonWriter;
}