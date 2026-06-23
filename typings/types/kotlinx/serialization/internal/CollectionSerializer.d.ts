import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CollectionLikeSerializer } from '../../../kotlinx/serialization/internal/CollectionLikeSerializer.d.ts'
export abstract class CollectionSerializer<E extends unknown, C extends E[], B extends unknown> extends CollectionLikeSerializer<E, C, B> {
    constructor(element: KSerializer<E>)
}