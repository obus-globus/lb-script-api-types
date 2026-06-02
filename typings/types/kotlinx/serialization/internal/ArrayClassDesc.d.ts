import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { ListLikeDescriptor } from '../../../kotlinx/serialization/internal/ListLikeDescriptor.d.ts'
export class ArrayClassDesc extends ListLikeDescriptor {
    constructor(elementDesc: SerialDescriptor)
    readonly serialName: string;
}