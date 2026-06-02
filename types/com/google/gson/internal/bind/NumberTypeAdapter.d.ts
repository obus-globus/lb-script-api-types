import type { ToNumberStrategy } from '../../../../../com/google/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class NumberTypeAdapter extends TypeAdapter<Number> {
    static getFactory(paramarg0: ToNumberStrategy): TypeAdapterFactory;
    private constructor(arg0: ToNumberStrategy)
    // private toNumberStrategy: ToNumberStrategy;
    read(arg0: JsonReader): Number;
    write(arg0: JsonWriter, arg1: Number): void;
}