import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ExclusionStrategy } from '../../../com/google/gson/ExclusionStrategy.d.ts'
import type { FieldNamingPolicy } from '../../../com/google/gson/FieldNamingPolicy.d.ts'
import type { FieldNamingStrategy } from '../../../com/google/gson/FieldNamingStrategy.d.ts'
import type { FormattingStyle } from '../../../com/google/gson/FormattingStyle.d.ts'
import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { InstanceCreator } from '../../../com/google/gson/InstanceCreator.d.ts'
import type { LongSerializationPolicy } from '../../../com/google/gson/LongSerializationPolicy.d.ts'
import type { ReflectionAccessFilter } from '../../../com/google/gson/ReflectionAccessFilter.d.ts'
import type { Strictness } from '../../../com/google/gson/Strictness.d.ts'
import type { ToNumberStrategy } from '../../../com/google/gson/ToNumberStrategy.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../com/google/gson/TypeAdapterFactory.d.ts'
import type { ConstructorConstructor } from '../../../com/google/gson/internal/ConstructorConstructor.d.ts'
import type { Excluder } from '../../../com/google/gson/internal/Excluder.d.ts'
import type { JsonAdapterAnnotationTypeAdapterFactory } from '../../../com/google/gson/internal/bind/JsonAdapterAnnotationTypeAdapterFactory.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class GsonBuilder extends Object {
    constructor()
    constructor(arg0: Gson)
    // private complexMapKeySerialization: boolean;
    // private datePattern: string;
    // private dateStyle: number;
    // private escapeHtmlChars: boolean;
    // private excluder: Excluder;
    // private factories: TypeAdapterFactory[];
    // private fieldNamingPolicy: FieldNamingStrategy;
    // private formattingStyle: FormattingStyle;
    // private generateNonExecutableJson: boolean;
    // private hierarchyFactories: TypeAdapterFactory[];
    // private instanceCreators: JavaMap<Type, InstanceCreator<Object>>;
    // private longSerializationPolicy: LongSerializationPolicy;
    // private numberToNumberStrategy: ToNumberStrategy;
    // private objectToNumberStrategy: ToNumberStrategy;
    // private reflectionFilters: ReflectionAccessFilter[];
    // private serializeNulls: boolean;
    // private serializeSpecialFloatingPointValues: boolean;
    // private strictness: Strictness;
    // private timeStyle: number;
    // private useJdkUnsafe: boolean;
    // private addDateTypeAdapters(arg0: TypeAdapterFactory[]): void;
    addDeserializationExclusionStrategy(arg0: ExclusionStrategy): GsonBuilder;
    addReflectionAccessFilter(arg0: ReflectionAccessFilter): GsonBuilder;
    addSerializationExclusionStrategy(arg0: ExclusionStrategy): GsonBuilder;
    // private addUserDefinedAdapters(arg0: TypeAdapterFactory[]): void;
    create(): Gson;
    createFactories(arg0: ConstructorConstructor, arg1: JsonAdapterAnnotationTypeAdapterFactory): TypeAdapterFactory[];
    disableHtmlEscaping(): GsonBuilder;
    disableInnerClassSerialization(): GsonBuilder;
    disableJdkUnsafe(): GsonBuilder;
    // private doubleAdapter(): TypeAdapter<Number>;
    enableComplexMapKeySerialization(): GsonBuilder;
    excludeFieldsWithModifiers(...arg0: number[]): GsonBuilder;
    excludeFieldsWithoutExposeAnnotation(): GsonBuilder;
    // private floatAdapter(): TypeAdapter<Number>;
    generateNonExecutableJson(): GsonBuilder;
    registerTypeAdapter(arg0: Type, arg1: Object): GsonBuilder;
    registerTypeAdapterFactory(arg0: TypeAdapterFactory): GsonBuilder;
    registerTypeHierarchyAdapter(arg0: Class<Object>, arg1: Object): GsonBuilder;
    serializeNulls(): GsonBuilder;
    serializeSpecialFloatingPointValues(): GsonBuilder;
    setDateFormat(arg0: number): GsonBuilder;
    setDateFormat(arg0: number, arg1: number): GsonBuilder;
    setDateFormat(arg0: string): GsonBuilder;
    setExclusionStrategies(...arg0: ExclusionStrategy[]): GsonBuilder;
    setFieldNamingPolicy(arg0: FieldNamingPolicy): GsonBuilder;
    setFieldNamingStrategy(arg0: FieldNamingStrategy): GsonBuilder;
    setFormattingStyle(arg0: FormattingStyle): GsonBuilder;
    setLenient(): GsonBuilder;
    setLongSerializationPolicy(arg0: LongSerializationPolicy): GsonBuilder;
    setNumberToNumberStrategy(arg0: ToNumberStrategy): GsonBuilder;
    setObjectToNumberStrategy(arg0: ToNumberStrategy): GsonBuilder;
    setPrettyPrinting(): GsonBuilder;
    setStrictness(arg0: Strictness): GsonBuilder;
    setVersion(arg0: number): GsonBuilder;
}