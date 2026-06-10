import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
import type { FieldNamingStrategy } from '../../../../../../org/spongepowered/include/com/google/gson/FieldNamingStrategy.d.ts'
import type { Gson$FutureTypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/Gson$FutureTypeAdapter.d.ts'
import type { InstanceCreator } from '../../../../../../org/spongepowered/include/com/google/gson/InstanceCreator.d.ts'
import type { JsonDeserializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializationContext.d.ts'
import type { LongSerializationPolicy } from '../../../../../../org/spongepowered/include/com/google/gson/LongSerializationPolicy.d.ts'
import type { TypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../../org/spongepowered/include/com/google/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../../../../org/spongepowered/include/com/google/gson/internal/Excluder.d.ts'
import type { TypeToken } from '../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
import type { JsonReader } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class Gson extends Object {
    constructor()
    constructor(arg0: Excluder, arg1: FieldNamingStrategy, arg2: Map<Type, InstanceCreator<Object>>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: LongSerializationPolicy, arg10: TypeAdapterFactory[])
    // private calls: ThreadLocal<Map<TypeToken<Object>, Gson$FutureTypeAdapter<Object>>>;
    // private constructorConstructor: ConstructorConstructor;
    // private deserializationContext: JsonDeserializationContext;
    // private factories: TypeAdapterFactory[];
    // private generateNonExecutableJson: boolean;
    // private htmlSafe: boolean;
    // private prettyPrinting: boolean;
    // private serializationContext: JsonSerializationContext;
    // private serializeNulls: boolean;
    // private typeTokenCache: Map<TypeToken<Object>, TypeAdapter<Object>>;
    // private checkValidFloatingPoint(arg0: number): void;
    // private doubleAdapter(arg0: boolean): TypeAdapter<Number>;
    // private floatAdapter(arg0: boolean): TypeAdapter<Number>;
    fromJson<T extends Object | number | string | boolean>(arg0: Reader, arg1: Class<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonReader, arg1: Type): T;
    getAdapter<T extends Object | number | string | boolean>(arg0: Class<T>): TypeAdapter<T>;
    getAdapter<T extends Object | number | string | boolean>(arg0: TypeToken<T>): TypeAdapter<T>;
    getDelegateAdapter<T extends Object | number | string | boolean>(arg0: TypeAdapterFactory, arg1: TypeToken<T>): TypeAdapter<T>;
    // private longAdapter(arg0: LongSerializationPolicy): TypeAdapter<Number>;
    // private newJsonWriter(arg0: Writer): JsonWriter;
    toJson(arg0: Object, arg1: Appendable): void;
    toJson(arg0: Object, arg1: Type, arg2: Appendable): void;
    toJson(arg0: Object, arg1: Type, arg2: JsonWriter): void;
    toJson(arg0: JsonElement): string;
    toJson(arg0: JsonElement, arg1: Appendable): void;
    toJson(arg0: JsonElement, arg1: JsonWriter): void;
    toString(): string;
}