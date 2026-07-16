import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { PolymorphicModuleBuilder } from '../../../kotlinx/serialization/modules/PolymorphicModuleBuilder.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
import type { SerializersModuleBuilder } from '../../../kotlinx/serialization/modules/SerializersModuleBuilder.d.ts'
export class SerializersModuleBuildersKt extends Object {
    static EmptySerializersModule(): SerializersModule;
    static SerializersModule(builderAction: (param0: SerializersModuleBuilder) => void): SerializersModule;
    static contextual<T extends unknown>(self: SerializersModuleBuilder, serializer: KSerializer<T>): void;
    static polymorphic<Base extends unknown>(self: SerializersModuleBuilder, baseClass: KClass<Base>, baseSerializer: KSerializer<Base> | null, builderAction: (param0: PolymorphicModuleBuilder<Base>) => void): void;
    static serializersModuleOf<T extends unknown>(kClass: KClass<T>, serializer: KSerializer<T>): SerializersModule;
    static serializersModuleOf<T extends unknown>(serializer: KSerializer<T>): SerializersModule;
}