import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { DefaultDateTypeAdapter$DateType } from '../../../../../com/google/gson/internal/bind/DefaultDateTypeAdapter$DateType.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { DateFormat } from '../../../../../java/text/DateFormat.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
export class DefaultDateTypeAdapter<T extends Date> extends TypeAdapter<T> {
    static DEFAULT_STYLE_FACTORY: TypeAdapterFactory;
    constructor(arg0: DefaultDateTypeAdapter$DateType<Date>, arg1: number, arg2: number, arg3: TypeAdapterFactory)
    constructor(arg0: DefaultDateTypeAdapter$DateType<Date>, arg1: string, arg2: TypeAdapterFactory)
    // private dateFormats: DateFormat[];
    // private dateType: DefaultDateTypeAdapter$DateType<T>;
    // private deserializeToDate(arg0: JsonReader): Date;
    read(arg0: JsonReader): T;
    toString(): string;
    write(arg0: JsonWriter, arg1: Date): void;
}