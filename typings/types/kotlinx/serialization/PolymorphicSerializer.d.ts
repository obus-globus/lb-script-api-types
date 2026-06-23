import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { AbstractPolymorphicSerializer } from '../../kotlinx/serialization/internal/AbstractPolymorphicSerializer.d.ts'
export class PolymorphicSerializer<T extends unknown> extends AbstractPolymorphicSerializer<T> {
    constructor(baseClass: KClass<T>)
    constructor(baseClass: KClass<T>, classAnnotations: Annotation[])
    // private _annotations: Annotation[];
    readonly baseClass: KClass<T>;
    readonly descriptor: SerialDescriptor;
    toString(): string;
}