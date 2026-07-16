import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
export class ListLikeDescriptor extends Object implements SerialDescriptor {
    protected constructor(elementDescriptor: SerialDescriptor)
    readonly elementDescriptor: SerialDescriptor;
    readonly elementsCount: number;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isNullable(): boolean;
    readonly kind: SerialKind;
    /*not mapped: */ getSerialName(): string;
    equals(other: Object | null): boolean;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    hashCode(): number;
    isElementOptional(index: number): boolean;
    toString(): string;
}