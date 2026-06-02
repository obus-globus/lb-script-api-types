import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
import type { SerializersModuleBuilder } from '../../../kotlinx/serialization/modules/SerializersModuleBuilder.d.ts'
export class SerializersModuleBuildersKt extends Object {
    static EmptySerializersModule(): SerializersModule;
    static SerializersModule(paramarg0: Function1<Object, void>): SerializersModule;
    static contextual(paramarg0: SerializersModuleBuilder, paramarg1: KSerializer<Object>): void;
    static polymorphic(paramarg0: SerializersModuleBuilder, paramarg1: KClass<Object>, paramarg2: KSerializer<Object>, paramarg3: Function1<Object, void>): void;
    static serializersModuleOf(paramarg0: KClass<Object>, paramarg1: KSerializer<Object>): SerializersModule;
    static serializersModuleOf(paramarg0: KSerializer<Object>): SerializersModule;
}