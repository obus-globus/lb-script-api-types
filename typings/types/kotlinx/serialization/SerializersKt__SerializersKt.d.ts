import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersKt__SerializersKt extends Object {
    static moduleThenPolymorphic(paramarg0: SerializersModule, paramarg1: KClass<Object>): KSerializer<Object>;
    static moduleThenPolymorphic(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: Object | null): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: string): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: SerializersModule, paramarg1: KClass<Object>): KSerializer<Object>;
    static noCompiledSerializer(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: Object | null): KSerializer<Object>;
    static parametrizedSerializerOrNull(paramarg0: KClass<Object>, paramarg1: (Object | null)[], paramarg2: () => Object | null): KSerializer<Object>;
    static serializer(): KSerializer<Object>;
    static serializer(paramarg0: KClass<Object>): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule): KSerializer<Object>;
    static serializer(paramarg0: KClass<Object>, paramarg1: (Object | null)[], paramarg2: boolean): KSerializer<Object>;
    static serializer(paramarg0: KType): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule, paramarg1: KClass<Object>, paramarg2: (Object | null)[], paramarg3: boolean): KSerializer<Object>;
    static serializer(paramarg0: SerializersModule, paramarg1: KType): KSerializer<Object>;
    static serializerOrNull(paramarg0: KClass<Object>): KSerializer<Object>;
    static serializerOrNull(paramarg0: KType): KSerializer<Object>;
    static serializerOrNull(paramarg0: SerializersModule, paramarg1: KType): KSerializer<Object>;
    static serializersForParameters(paramarg0: SerializersModule, paramarg1: (Object | null)[], paramarg2: boolean): (Object | null)[];
}