import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ArrayTypeAdapter<E extends unknown> extends TypeAdapter<Object> {
    static FACTORY: TypeAdapterFactory;
    constructor(arg0: Gson, arg1: TypeAdapter<E>, arg2: Class<E>)
    // private componentType: Class<E>;
    // private componentTypeAdapter: TypeAdapter<E>;
    read(arg0: JsonReader): Object;
    write(arg0: JsonWriter, arg1: Object): void;
}