import type { DateFormat } from '../../../../../../../../java/text/DateFormat.d.ts'
import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class DateTypeAdapter extends TypeAdapter<Date> {
    static FACTORY: TypeAdapterFactory;
    constructor()
    // private enUsFormat: DateFormat;
    // private iso8601Format: DateFormat;
    // private localFormat: DateFormat;
    // private deserializeToDate(arg0: string): Date;
    read(arg0: JsonReader): Date;
    write(arg0: JsonWriter, arg1: Date): void;
}