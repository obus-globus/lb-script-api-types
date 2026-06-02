import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ReflectiveTypeAdapterFactory$BoundField extends Object {
    constructor(arg0: string, arg1: Field)
    // private field: Field;
    // private fieldName: string;
    // private serializedName: string;
    readIntoArray(arg0: JsonReader, arg1: number, arg2: Object[]): void;
    readIntoField(arg0: JsonReader, arg1: Object): void;
    write(arg0: JsonWriter, arg1: Object): void;
}