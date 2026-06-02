import type { Gson } from '../../../../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { JsonDeserializer } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonDeserializer.d.ts'
import type { JsonSerializer } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonSerializer.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { SerializationDelegatingTypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/SerializationDelegatingTypeAdapter.d.ts'
import type { TreeTypeAdapter$GsonContextImpl } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/TreeTypeAdapter$GsonContextImpl.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TreeTypeAdapter<T extends Object | number | string | boolean> extends SerializationDelegatingTypeAdapter<T> {
    static newFactory(paramarg0: TypeToken<Object>, paramarg1: Object): TypeAdapterFactory;
    static newFactoryWithMatchRawType(paramarg0: TypeToken<Object>, paramarg1: Object): TypeAdapterFactory;
    static newTypeHierarchyFactory(paramarg0: Class<Object>, paramarg1: Object): TypeAdapterFactory;
    constructor(arg0: JsonSerializer<T>, arg1: JsonDeserializer<T>, arg2: Gson, arg3: TypeToken<T>, arg4: TypeAdapterFactory)
    constructor(arg0: JsonSerializer<T>, arg1: JsonDeserializer<T>, arg2: Gson, arg3: TypeToken<T>, arg4: TypeAdapterFactory, arg5: boolean)
    // private context: TreeTypeAdapter$GsonContextImpl;
    // private delegate: TypeAdapter<T>;
    // private deserializer: JsonDeserializer<T>;
    // private gson: Gson;
    // private nullSafe: boolean;
    // private serializer: JsonSerializer<T>;
    // private skipPastForGetDelegateAdapter: TypeAdapterFactory;
    // private typeToken: TypeToken<T>;
    // private delegate(): TypeAdapter<T>;
    getSerializationDelegate(): TypeAdapter<T>;
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}