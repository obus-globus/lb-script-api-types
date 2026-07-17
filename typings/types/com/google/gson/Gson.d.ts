import type { JavaMap } from '../../../JavaMap.d.ts'
import type { FieldNamingStrategy } from '../../../com/google/gson/FieldNamingStrategy.d.ts'
import type { FormattingStyle } from '../../../com/google/gson/FormattingStyle.d.ts'
import type { GsonBuilder } from '../../../com/google/gson/GsonBuilder.d.ts'
import type { InstanceCreator } from '../../../com/google/gson/InstanceCreator.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { LongSerializationPolicy } from '../../../com/google/gson/LongSerializationPolicy.d.ts'
import type { ReflectionAccessFilter } from '../../../com/google/gson/ReflectionAccessFilter.d.ts'
import type { Strictness } from '../../../com/google/gson/Strictness.d.ts'
import type { ToNumberStrategy } from '../../../com/google/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../com/google/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../com/google/gson/internal/Excluder.d.ts'
import type { JsonAdapterAnnotationTypeAdapterFactory } from '../../../com/google/gson/internal/bind/JsonAdapterAnnotationTypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../com/google/gson/reflect/TypeToken.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../java/lang/ThreadLocal.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Gson extends Object {
    constructor()
    constructor(arg0: GsonBuilder)
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
    // private instanceCreators: JavaMap<Type, InstanceCreator<Object>>;
    // private jsonAdapterFactory: JsonAdapterAnnotationTypeAdapterFactory;
    // private longSerializationPolicy: LongSerializationPolicy;
    // private numberToNumberStrategy: ToNumberStrategy;
    // private objectToNumberStrategy: ToNumberStrategy;
    // private reflectionFilters: ReflectionAccessFilter[];
    // private serializeNulls: boolean;
    // private serializeSpecialFloatingPointValues: boolean;
    // private strictness: Strictness;
    // private threadLocalAdapterResults: ThreadLocal<JavaMap<TypeToken<Object>, TypeAdapter<Object>>>;
    // private timeStyle: number;
    // private typeTokenCache: JavaMap<TypeToken<Object>, TypeAdapter<Object>>;
    // private useJdkUnsafe: boolean;
    excluder(): Excluder;
    fieldNamingStrategy(): FieldNamingStrategy;
    fromJson<T extends unknown>(arg0: JsonElement, arg1: TypeToken<T>): T;
    fromJson<T extends unknown>(arg0: JsonElement, arg1: Class<T>): T;
    fromJson<T extends unknown>(arg0: JsonElement, arg1: Type): T;
    fromJson<T extends unknown>(arg0: JsonReader, arg1: TypeToken<T>): T;
    fromJson<T extends unknown>(arg0: JsonReader, arg1: Type): T;
    fromJson<T extends unknown>(arg0: Reader, arg1: TypeToken<T>): T;
    fromJson<T extends unknown>(arg0: Reader, arg1: Class<T>): T;
    fromJson<T extends unknown>(arg0: Reader, arg1: Type): T;
    fromJson<T extends unknown>(arg0: string, arg1: TypeToken<T>): T;
    fromJson<T extends unknown>(arg0: string, arg1: Class<T>): T;
    fromJson<T extends unknown>(arg0: string, arg1: Type): T;
    getAdapter<T extends unknown>(arg0: TypeToken<T>): TypeAdapter<T>;
    getAdapter<T extends unknown>(arg0: Class<T>): TypeAdapter<T>;
    getDelegateAdapter<T extends unknown>(arg0: TypeAdapterFactory, arg1: TypeToken<T>): TypeAdapter<T>;
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