import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CollectionSerializer } from '../../../kotlinx/serialization/internal/CollectionSerializer.d.ts'
export class LinkedHashSetSerializer<E extends Object | number | string | boolean> extends CollectionSerializer<E, E[], E[]> {
    constructor(eSerializer: KSerializer<E>)
    readonly descriptor: SerialDescriptor;
    protected builder(): E[];
}