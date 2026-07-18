import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
/**
 * Please use {@link Vec3i} instead of {@link BlockPos} for serialization.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/VectorAdapter.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/adapter/VectorAdapter.kt:35}
 */
export class Vec3iAdapter extends TypeAdapter<Vec3i> {
    static INSTANCE: Vec3iAdapter;
    read(reader: JsonReader): Vec3i | null;
    write(out: JsonWriter, value: Vec3i | null): void;
}