import type { ToNumberStrategy } from '../../../../../../../com/viaversion/viaversion/libs/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class NumberTypeAdapter extends TypeAdapter<Number> {
    static getFactory(paramarg0: ToNumberStrategy): TypeAdapterFactory;
    private constructor(arg0: ToNumberStrategy)
    // private toNumberStrategy: ToNumberStrategy;
    read(arg0: JsonReader): Number;
    write(arg0: JsonWriter, arg1: Number): void;
}