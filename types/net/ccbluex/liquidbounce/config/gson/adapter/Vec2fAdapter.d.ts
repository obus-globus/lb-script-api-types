import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class Vec2fAdapter extends TypeAdapter<Vec2> {
    static INSTANCE: Vec2fAdapter;
    read(reader: JsonReader): Vec2 | null;
    write(out: JsonWriter, value: Vec2 | null): void;
}