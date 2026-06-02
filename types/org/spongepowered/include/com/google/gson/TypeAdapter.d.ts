import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export abstract class TypeAdapter<T extends Object | number | string | boolean> extends Object {
    constructor()
    read(arg0: JsonReader): T;
    toJsonTree(arg0: T): JsonElement;
    write(arg0: JsonWriter, arg1: T): void;
}