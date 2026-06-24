import type { EnumTypeAdapter$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class EnumTypeAdapter<T extends Enum<T>> extends TypeAdapter<T> {
    constructor(arg0: Class<Object>, arg1: EnumTypeAdapter$1)
    private constructor(arg0: Class<T>)
    // private constantToName: Map<T, string>;
    // private nameToConstant: { [key: string]: T };
    // private stringToConstant: { [key: string]: T };
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}