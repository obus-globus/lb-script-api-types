import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
/**
 * Please use {@link Vec3i} instead of {@link BlockPos} for serialization.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/VectorAdapter.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/VectorAdapter.kt:32}
 */
export class Vec3iAdapter extends TypeAdapter<Vec3i> {
    static INSTANCE: Vec3iAdapter;
    read(reader: JsonReader): Vec3i | null;
    write(out: JsonWriter, value: Vec3i | null): void;
}