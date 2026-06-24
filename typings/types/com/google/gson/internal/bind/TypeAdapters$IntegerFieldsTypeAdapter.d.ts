import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TypeAdapters$IntegerFieldsTypeAdapter<T extends unknown> extends TypeAdapter<T> {
    constructor(arg0: string[])
    // private fields: string[];
    create(arg0: number[]): T;
    integerValues(arg0: T): number[];
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}