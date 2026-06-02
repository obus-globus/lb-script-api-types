import type { FieldNamingStrategy } from '../../../../../com/viaversion/viaversion/libs/gson/FieldNamingStrategy.d.ts'
import type { FormattingStyle } from '../../../../../com/viaversion/viaversion/libs/gson/FormattingStyle.d.ts'
import type { GsonBuilder } from '../../../../../com/viaversion/viaversion/libs/gson/GsonBuilder.d.ts'
import type { InstanceCreator } from '../../../../../com/viaversion/viaversion/libs/gson/InstanceCreator.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { LongSerializationPolicy } from '../../../../../com/viaversion/viaversion/libs/gson/LongSerializationPolicy.d.ts'
import type { ReflectionAccessFilter } from '../../../../../com/viaversion/viaversion/libs/gson/ReflectionAccessFilter.d.ts'
import type { Strictness } from '../../../../../com/viaversion/viaversion/libs/gson/Strictness.d.ts'
import type { ToNumberStrategy } from '../../../../../com/viaversion/viaversion/libs/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../../../com/viaversion/viaversion/libs/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../../../com/viaversion/viaversion/libs/gson/internal/Excluder.d.ts'
import type { JsonAdapterAnnotationTypeAdapterFactory } from '../../../../../com/viaversion/viaversion/libs/gson/internal/bind/JsonAdapterAnnotationTypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { JsonReader } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
export class Gson extends Object {
    constructor()
    constructor(arg0: Excluder, arg1: FieldNamingStrategy, arg2: Map<Type, InstanceCreator<Object>>, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: FormattingStyle, arg8: Strictness, arg9: boolean, arg10: boolean, arg11: LongSerializationPolicy, arg12: string, arg13: number, arg14: number, arg15: TypeAdapterFactory[], arg16: TypeAdapterFactory[], arg17: TypeAdapterFactory[], arg18: ToNumberStrategy, arg19: ToNumberStrategy, arg20: ReflectionAccessFilter[])
    // private builderFactories: TypeAdapterFactory[];
    // private builderHierarchyFactories: TypeAdapterFactory[];
    // private complexMapKeySerialization: boolean;
    // private constructorConstructor: ConstructorConstructor;
    // private datePattern: string;
    // private dateStyle: number;
    // private excluder: Excluder;
    // private factories: TypeAdapterFactory[];
    // private fieldNamingStrategy: FieldNamingStrategy;
    // private formattingStyle: FormattingStyle;
    // private generateNonExecutableJson: boolean;
    // private htmlSafe: boolean;
    // private instanceCreators: Map<Type, InstanceCreator<Object>>;
    // private jsonAdapterFactory: JsonAdapterAnnotationTypeAdapterFactory;
    // private longSerializationPolicy: LongSerializationPolicy;
    // private numberToNumberStrategy: ToNumberStrategy;
    // private objectToNumberStrategy: ToNumberStrategy;
    // private reflectionFilters: ReflectionAccessFilter[];
    // private serializeNulls: boolean;
    // private serializeSpecialFloatingPointValues: boolean;
    // private strictness: Strictness;
    // private threadLocalAdapterResults: ThreadLocal<Map<TypeToken<Object>, TypeAdapter<Object>>>;
    // private timeStyle: number;
    // private typeTokenCache: Map<TypeToken<Object>, TypeAdapter<Object>>;
    // private useJdkUnsafe: boolean;
    // private doubleAdapter(arg0: boolean): TypeAdapter<Number>;
    excluder(): Excluder;
    fieldNamingStrategy(): FieldNamingStrategy;
    // private floatAdapter(arg0: boolean): TypeAdapter<Number>;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonElement, arg1: TypeToken<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonElement, arg1: Class<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonElement, arg1: Type): T;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonReader, arg1: TypeToken<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: JsonReader, arg1: Type): T;
    fromJson<T extends Object | number | string | boolean>(arg0: Reader, arg1: TypeToken<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: Reader, arg1: Class<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: Reader, arg1: Type): T;
    fromJson<T extends Object | number | string | boolean>(arg0: string, arg1: TypeToken<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T;
    fromJson<T extends Object | number | string | boolean>(arg0: string, arg1: Type): T;
    getAdapter(arg0: TypeToken<T>): TypeAdapter<T>;
    getAdapter(arg0: Class<T>): TypeAdapter<T>;
    getDelegateAdapter(arg0: TypeAdapterFactory, arg1: TypeToken<T>): TypeAdapter<T>;
    htmlSafe(): boolean;
    newBuilder(): GsonBuilder;
    newJsonReader(arg0: Reader): JsonReader;
    newJsonWriter(arg0: Writer): JsonWriter;
    serializeNulls(): boolean;
    toJson(arg0: JsonElement): string;
    toJson(arg0: JsonElement, arg1: JsonWriter): void;
    toJson(arg0: JsonElement, arg1: Appendable): void;
    toJson(arg0: Object): string;
    toJson(arg0: Object, arg1: Appendable): void;
    toJson(arg0: Object, arg1: Type): string;
    toJson(arg0: Object, arg1: Type, arg2: JsonWriter): void;
    toJson(arg0: Object, arg1: Type, arg2: Appendable): void;
    toJsonTree(arg0: Object): JsonElement;
    toJsonTree(arg0: Object, arg1: Type): JsonElement;
    toString(): string;
}