import type { TypeAdapter } from '../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeAdapter$NullSafeTypeAdapter extends TypeAdapter<T> {
    private constructor(null_: TypeAdapter<Object>)
    read<T extends unknown>(arg0: JsonReader): T;
    toString(): string;
    write<T extends unknown>(arg0: JsonWriter, arg1: T): void;
}