import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class InlineClassDescriptorKt extends Object {
    static InlinePrimitiveDescriptor<T extends unknown>(name: string, primitiveSerializer: KSerializer<T>): SerialDescriptor;
}