import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Vec3dAdapter extends TypeAdapter<Vec3> {
    static INSTANCE: Vec3dAdapter;
    read(reader: JsonReader): Vec3 | null;
    write(out: JsonWriter, value: Vec3 | null): void;
}