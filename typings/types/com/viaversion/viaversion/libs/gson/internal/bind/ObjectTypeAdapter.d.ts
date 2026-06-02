import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { ToNumberStrategy } from '../../../../../../../com/viaversion/viaversion/libs/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonToken.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectTypeAdapter extends TypeAdapter<Object> {
    static getFactory(paramarg0: ToNumberStrategy): TypeAdapterFactory;
    private constructor(arg0: Gson, arg1: ToNumberStrategy)
    // private gson: Gson;
    // private toNumberStrategy: ToNumberStrategy;
    read(arg0: JsonReader): Object;
    // private readTerminal(arg0: JsonReader, arg1: JsonToken): Object;
    // private tryBeginNesting(arg0: JsonReader, arg1: JsonToken): Object;
    write(arg0: JsonWriter, arg1: Object): void;
}