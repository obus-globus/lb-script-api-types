import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CollectionLikeSerializer } from '../../../kotlinx/serialization/internal/CollectionLikeSerializer.d.ts'
export class ReferenceArraySerializer<ElementKlass extends Object | number | string | boolean, Element extends ElementKlass> extends CollectionLikeSerializer<Element, Element[], Element[]> {
    constructor(kClass: KClass<ElementKlass>, eSerializer: KSerializer<Element>)
    readonly descriptor: SerialDescriptor;
    // private kClass: KClass<ElementKlass>;
    protected builder(): Element[];
}