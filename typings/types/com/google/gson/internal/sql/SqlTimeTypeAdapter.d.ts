import type { SqlTimeTypeAdapter$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Time } from '../../../../../java/sql/Time.d.ts'
import type { DateFormat } from '../../../../../java/text/DateFormat.d.ts'
export class SqlTimeTypeAdapter extends TypeAdapter<Time> {
    private constructor()
    constructor(arg0: SqlTimeTypeAdapter$1)
    // private format: DateFormat;
    read(arg0: JsonReader): Time;
    write(arg0: JsonWriter, arg1: Time): void;
}