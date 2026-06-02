import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/ObjectConstructor.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CollectionTypeAdapterFactory$Adapter<E extends Object | number | string | boolean> extends TypeAdapter<E[]> {
    constructor(arg0: TypeAdapter<E>, arg1: ObjectConstructor<E[]>)
    // private constructor: ObjectConstructor<E[]>;
    // private elementTypeAdapter: TypeAdapter<E>;
    read(arg0: JsonReader): E[];
    write(arg0: JsonWriter, arg1: E[]): void;
}