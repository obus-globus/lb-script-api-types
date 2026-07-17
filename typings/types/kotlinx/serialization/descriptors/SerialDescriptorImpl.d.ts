import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClassSerialDescriptorBuilder } from '../../../kotlinx/serialization/descriptors/ClassSerialDescriptorBuilder.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
import type { CachedNames } from '../../../kotlinx/serialization/internal/CachedNames.d.ts'
export class SerialDescriptorImpl extends Object implements SerialDescriptor, CachedNames {
    constructor(serialName: string, kind: SerialKind, elementsCount: number, typeParameters: SerialDescriptor[], builder: ClassSerialDescriptorBuilder)
    // private _hashCode: number;
    // private /*not mapped: */ get_hashCode(): number;
    readonly annotations: Annotation[];
    readonly elementAnnotations: Annotation[][];
    // private elementDescriptors: SerialDescriptor[];
    // private elementNames: string[];
    // private elementOptionality: boolean[];
    readonly elementsCount: number;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isNullable(): boolean;
    readonly kind: SerialKind;
    // private name2Index: JavaMap<string, number>;
    readonly serialName: string;
    readonly serialNames: string[];
    // private typeParametersDescriptors: SerialDescriptor[];
    equals(other: Object | null): boolean;
    getElementAnnotations(index: number): Annotation[];
    getElementDescriptor(index: number): SerialDescriptor;
    getElementIndex(name: string): number;
    getElementName(index: number): string;
    hashCode(): number;
    isElementOptional(index: number): boolean;
    toString(): string;
}