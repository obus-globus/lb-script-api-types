import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PrimitiveKind } from '../../../kotlinx/serialization/descriptors/PrimitiveKind.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PrimitiveSerialDescriptor extends Object implements SerialDescriptor {
    constructor(serialName: string, kind: PrimitiveKind)
    readonly elementsCount: number;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isNullable(): boolean;
    readonly kind: PrimitiveKind;
    readonly serialName: string;
    equals(other: Object | null): boolean;
    // private error(): void;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    hashCode(): number;
    isElementOptional(index: number): boolean;
    toString(): string;
}