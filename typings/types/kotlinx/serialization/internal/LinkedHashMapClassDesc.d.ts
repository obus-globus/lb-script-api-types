import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { MapLikeDescriptor } from '../../../kotlinx/serialization/internal/MapLikeDescriptor.d.ts'
export class LinkedHashMapClassDesc extends MapLikeDescriptor {
    constructor(keyDesc: SerialDescriptor, valueDesc: SerialDescriptor)
}