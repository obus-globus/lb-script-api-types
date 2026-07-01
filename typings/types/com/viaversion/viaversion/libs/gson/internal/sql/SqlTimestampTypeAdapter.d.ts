import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Timestamp } from '../../../../../../../java/sql/Timestamp.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SqlTimestampTypeAdapter extends TypeAdapter<Timestamp> {
    constructor(arg0: TypeAdapter<Object>, arg1: TypeAdapterFactory)
    // private dateTypeAdapter: TypeAdapter<Date>;
    read(arg0: JsonReader): Timestamp;
    write(arg0: JsonWriter, arg1: Timestamp): void;
}