import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Time } from '../../../../../../../java/sql/Time.d.ts'
import type { DateFormat } from '../../../../../../../java/text/DateFormat.d.ts'
export class SqlTimeTypeAdapter extends TypeAdapter<Time> {
    private constructor()
    // private format: DateFormat;
    read(arg0: JsonReader): Time;
    write(arg0: JsonWriter, arg1: Time): void;
}