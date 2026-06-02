import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { PolymorphicModuleBuilder } from '../../../kotlinx/serialization/modules/PolymorphicModuleBuilder.d.ts'
export class PolymorphicModuleBuilderKt extends Object {
    static subclass(paramarg0: PolymorphicModuleBuilder<Object>, paramarg1: KClass<Object>): void;
    static subclass(paramarg0: PolymorphicModuleBuilder<Object>, paramarg1: KSerializer<Object>): void;
    static subclassesOfSealed(paramarg0: PolymorphicModuleBuilder<Object>): void;
}