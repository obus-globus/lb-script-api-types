import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Date } from '../../../../../../../java/sql/Date.d.ts'
import type { DateFormat } from '../../../../../../../java/text/DateFormat.d.ts'
export class SqlDateTypeAdapter extends TypeAdapter<Date> {
    constructor(arg0: TypeAdapterFactory)
    // private format: DateFormat;
    read(arg0: JsonReader): Date;
    write(arg0: JsonWriter, arg1: Date): void;
}