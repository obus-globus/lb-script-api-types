import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class ContextAwareKt extends Object {
    static getCapturedKClass(paramarg0: SerialDescriptor): KClass<Object>;
    static getContextualDescriptor(paramarg0: SerializersModule, paramarg1: SerialDescriptor): SerialDescriptor;
    static getPolymorphicDescriptors(paramarg0: SerializersModule, paramarg1: SerialDescriptor): SerialDescriptor[];
    static withContext(paramarg0: SerialDescriptor, paramarg1: KClass<Object>): SerialDescriptor;
}