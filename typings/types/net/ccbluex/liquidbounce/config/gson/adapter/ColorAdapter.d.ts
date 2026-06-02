import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ColorAdapter extends TypeAdapter<Color4b> {
    static INSTANCE: ColorAdapter;
    read(reader: JsonReader): Color4b | null;
    write(writer: JsonWriter, value: Color4b | null): void;
}