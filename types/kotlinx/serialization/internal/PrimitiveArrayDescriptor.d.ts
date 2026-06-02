import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { ListLikeDescriptor } from '../../../kotlinx/serialization/internal/ListLikeDescriptor.d.ts'
export class PrimitiveArrayDescriptor extends ListLikeDescriptor {
    constructor(primitive: SerialDescriptor)
    readonly serialName: string;
}