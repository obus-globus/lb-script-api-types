import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
export class JsonObjectSerializer$JsonObjectDescriptor extends Object implements SerialDescriptor {
    static INSTANCE: JsonObjectSerializer$JsonObjectDescriptor;
    readonly annotations: Annotation[];
    readonly elementsCount: number;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isNullable(): boolean;
    readonly kind: SerialKind;
    readonly serialName: string;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    isElementOptional(index: number): boolean;
}