import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Vector2fc } from '../../../../../../org/joml/Vector2fc.d.ts'
export class Vector2fcAdapter extends TypeAdapter<Vector2fc> {
    static INSTANCE: Vector2fcAdapter;
    read(reader: JsonReader): Vector2fc | null;
    write(out: JsonWriter, value: Vector2fc | null): void;
}