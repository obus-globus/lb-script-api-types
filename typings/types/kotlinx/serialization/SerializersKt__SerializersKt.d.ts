import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersKt__SerializersKt extends Object {
    static moduleThenPolymorphic(paramarg0: SerializersModule, paramarg1: KClass<Object>): KSerializer<Object>;
    static moduleThenPolymorphic(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: KSerializer<Object>[]): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: string): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: SerializersModule, paramarg1: KClass<Object>): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: KSerializer<Object>[]): KSerializer<Object>;
    static parametrizedSerializerOrNull(paramarg0: KClass<Object>, paramarg1: KSerializer<Object>[], paramarg2: () => KClassifier): KSerializer<Object>;
    static serializer<T extends unknown>(): KSerializer<T>;
    static serializer<T extends unknown>(paramarg0: KClass<T>): KSerializer<T>;
    static serializer<T extends unknown>(paramarg0: SerializersModule): KSerializer<T>;
    static serializer(paramarg0: KClass<Object>, paramarg1: KSerializer<Object>[], paramarg2: boolean): KSerializer<Object>;
    static serializer(paramarg0: KType): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: KSerializer<Object>[], paramarg3: boolean): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule, paramarg1: KType): KSerializer<Object>;
    static serializerOrNull<T extends unknown>(paramarg0: KClass<T>): KSerializer<T>;
    static serializerOrNull(paramarg0: KType): KSerializer<Object>;
    static serializerOrNull(paramarg0: SerializersModule, paramarg1: KType): KSerializer<Object>;
    static serializersForParameters(paramarg0: SerializersModule, paramarg1: KType[], paramarg2: boolean): KSerializer<Object>[];
}