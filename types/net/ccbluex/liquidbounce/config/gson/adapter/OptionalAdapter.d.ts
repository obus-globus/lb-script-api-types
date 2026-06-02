import type { TypeAdapter } from '../../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OptionalAdapter$Factory } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/OptionalAdapter$Factory.d.ts'
export class OptionalAdapter<T extends Object | number | string | boolean> extends TypeAdapter<Optional<T>> {
    static Factory: OptionalAdapter$Factory;
    private constructor(adapter: TypeAdapter<T>)
    // private adapter: TypeAdapter<T>;
    read(source: JsonReader): Optional<T> | null;
    write(sink: JsonWriter, value: Optional<T> | null): void;
}