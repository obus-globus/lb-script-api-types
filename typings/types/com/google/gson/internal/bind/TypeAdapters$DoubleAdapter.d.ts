import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class TypeAdapters$DoubleAdapter extends TypeAdapter<Number> {
    constructor(arg0: boolean)
    // private strict: boolean;
    read(arg0: JsonReader): number;
    write(arg0: JsonWriter, arg1: Number): void;
}