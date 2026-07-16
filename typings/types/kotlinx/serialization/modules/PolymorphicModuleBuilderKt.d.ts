import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { PolymorphicModuleBuilder } from '../../../kotlinx/serialization/modules/PolymorphicModuleBuilder.d.ts'
export class PolymorphicModuleBuilderKt extends Object {
    static subclass<Base extends unknown, T extends Base>(self: PolymorphicModuleBuilder<Base>, clazz: KClass<T>): void;
    static subclass<Base extends unknown, T extends Base>(self: PolymorphicModuleBuilder<Base>, serializer: KSerializer<T>): void;
    static subclassesOfSealed<Base extends unknown>(self: PolymorphicModuleBuilder<Base>): void;
}