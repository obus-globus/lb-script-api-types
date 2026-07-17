import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class EnumTypeAdapter<T extends Enum<T>> extends TypeAdapter<T> {
    private constructor(arg0: Class<T>)
    // private constantToName: JavaMap<T, string>;
    // private nameToConstant: JavaMap<string, T>;
    // private stringToConstant: JavaMap<string, T>;
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}