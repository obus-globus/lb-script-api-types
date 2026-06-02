import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class Gson$FutureTypeAdapter<T extends Object | number | string | boolean> extends TypeAdapter<T> {
    constructor()
    readonly delegate: TypeAdapter<T>;
    read(arg0: JsonReader): T;
    setDelegate(arg0: TypeAdapter<T>): void;
    write(arg0: JsonWriter, arg1: T): void;
}