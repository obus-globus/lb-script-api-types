import type { TypeAdapter$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypeAdapter$NullSafeTypeAdapter extends TypeAdapter<T> {
    private constructor(null_: TypeAdapter<T>)
    constructor(null_: TypeAdapter<T>, arg1: TypeAdapter$1)
    read<T extends unknown>(arg0: JsonReader): T;
    toString(): string;
    write<T extends unknown>(arg0: JsonWriter, arg1: T): void;
}