import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class SerializersKt extends Object {
    static moduleThenPolymorphic(module: SerializersModule, kClass: KClass<Object>): KSerializer<Object>;
    static moduleThenPolymorphic(module: SerializersModule, kClass: KClass<Object>, argSerializers: KSerializer<Object>[]): KSerializer<Object>;
    static noCompiledSerializer(forClass: string): KSerializer<Object>;
    static noCompiledSerializer(module: SerializersModule, kClass: KClass<Object>): KSerializer<Object>;
    static noCompiledSerializer(module: SerializersModule, kClass: KClass<Object>, argSerializers: KSerializer<Object>[]): KSerializer<Object>;
    static parametrizedSerializerOrNull(self: KClass<Object>, serializers: KSerializer<Object>[], elementClassifierIfArray: () => KClassifier | null): KSerializer<Object> | null;
    static serializer<T extends unknown>(): KSerializer<T>;
    static serializer<T extends unknown>(self: KClass<T>): KSerializer<T>;
    static serializer<T extends unknown>(self: SerializersModule): KSerializer<T>;
    static serializer(type: Type): KSerializer<Object>;
    static serializer(kClass: KClass<Object>, typeArgumentsSerializers: KSerializer<Object>[], isNullable: boolean): KSerializer<Object>;
    static serializer(type: KType): KSerializer<Object>;
    static serializer(self: SerializersModule, type: Type): KSerializer<Object>;
    static serializer(self: SerializersModule, kClass: KClass<Object>, typeArgumentsSerializers: KSerializer<Object>[], isNullable: boolean): KSerializer<Object>;
    static serializer(self: SerializersModule, type: KType): KSerializer<Object>;
    static serializerOrNull<T extends unknown>(self: KClass<T>): KSerializer<T> | null;
    static serializerOrNull(type: Type): KSerializer<Object> | null;
    static serializerOrNull(type: KType): KSerializer<Object> | null;
    static serializerOrNull(self: SerializersModule, type: Type): KSerializer<Object> | null;
    static serializerOrNull(self: SerializersModule, type: KType): KSerializer<Object> | null;
    static serializersForParameters(self: SerializersModule, typeArguments: KType[], failOnMissingTypeArgSerializer: boolean): KSerializer<Object>[] | null;
}