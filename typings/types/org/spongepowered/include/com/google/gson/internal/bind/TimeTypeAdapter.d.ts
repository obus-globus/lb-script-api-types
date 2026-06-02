import type { Time } from '../../../../../../../../java/sql/Time.d.ts'
import type { DateFormat } from '../../../../../../../../java/text/DateFormat.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class TimeTypeAdapter extends TypeAdapter<Time> {
    static FACTORY: TypeAdapterFactory;
    constructor()
    // private format: DateFormat;
    read(arg0: JsonReader): Time;
    write(arg0: JsonWriter, arg1: Time): void;
}