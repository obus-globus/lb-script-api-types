import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { PrimitiveKind } from '../../../kotlinx/serialization/descriptors/PrimitiveKind.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PrimitivesKt extends Object {
    static PrimitiveDescriptorSafe(serialName: string, kind: PrimitiveKind): SerialDescriptor;
    static builtinSerializerOrNull<T extends unknown>(self: KClass<T>): KSerializer<T> | null;
    static checkNameIsNotAPrimitive(serialName: string): void;
}