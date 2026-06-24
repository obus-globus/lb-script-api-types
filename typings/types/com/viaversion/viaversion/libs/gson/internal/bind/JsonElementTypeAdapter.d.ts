import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonToken.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
export class JsonElementTypeAdapter extends TypeAdapter<JsonElement> {
    static ADAPTER: JsonElementTypeAdapter;
    private constructor()
    read(arg0: JsonReader): JsonElement;
    // private readTerminal(arg0: JsonReader, arg1: JsonToken): JsonElement;
    // private tryBeginNesting(arg0: JsonReader, arg1: JsonToken): JsonElement;
    write(arg0: JsonWriter, arg1: JsonElement): void;
}