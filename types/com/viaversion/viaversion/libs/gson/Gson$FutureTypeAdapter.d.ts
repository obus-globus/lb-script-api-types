import type { TypeAdapter } from '../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { SerializationDelegatingTypeAdapter } from '../../../../../com/viaversion/viaversion/libs/gson/internal/bind/SerializationDelegatingTypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Gson$FutureTypeAdapter<T extends Object | number | string | boolean> extends SerializationDelegatingTypeAdapter<T> {
    constructor()
    readonly delegate: TypeAdapter<T>;
    // private delegate(): TypeAdapter<T>;
    getSerializationDelegate(): TypeAdapter<T>;
    read(arg0: JsonReader): T;
    setDelegate(arg0: TypeAdapter<T>): void;
    write(arg0: JsonWriter, arg1: T): void;
}