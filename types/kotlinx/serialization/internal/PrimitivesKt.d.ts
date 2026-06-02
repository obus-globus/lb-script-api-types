import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { PrimitiveKind } from '../../../kotlinx/serialization/descriptors/PrimitiveKind.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PrimitivesKt extends Object {
    static PrimitiveDescriptorSafe(paramarg0: string, paramarg1: PrimitiveKind): SerialDescriptor;
    static builtinSerializerOrNull(paramarg0: KClass<Object>): KSerializer<Object>;
    static checkNameIsNotAPrimitive(paramarg0: string): void;
}