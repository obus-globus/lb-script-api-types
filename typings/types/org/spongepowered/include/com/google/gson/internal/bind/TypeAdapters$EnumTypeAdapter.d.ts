import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class TypeAdapters$EnumTypeAdapter<T extends Enum<T>> extends TypeAdapter<T> {
    constructor(arg0: Class<T>)
    // private constantToName: Map<T, string>;
    // private nameToConstant: { [key: string]: T };
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}