import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { ClassSerialDescriptorBuilder } from '../../../kotlinx/serialization/descriptors/ClassSerialDescriptorBuilder.d.ts'
import type { PrimitiveKind } from '../../../kotlinx/serialization/descriptors/PrimitiveKind.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
export class SerialDescriptorsKt extends Object {
    static PrimitiveSerialDescriptor(serialName: string, kind: PrimitiveKind): SerialDescriptor;
    static SerialDescriptor(serialName: string, original: SerialDescriptor): SerialDescriptor;
    static buildClassSerialDescriptor(serialName: string, typeParameters: SerialDescriptor[], builderAction: (param0: ClassSerialDescriptorBuilder) => void): SerialDescriptor;
    static buildSerialDescriptor(serialName: string, kind: SerialKind, typeParameters: SerialDescriptor[], builder: (param0: ClassSerialDescriptorBuilder) => void): SerialDescriptor;
    static element(self: ClassSerialDescriptorBuilder, elementName: string, annotations: Annotation[], isOptional: boolean): void;
    static getNonNullOriginal(paramarg0: SerialDescriptor): SerialDescriptor;
    static getNullable(paramarg0: SerialDescriptor): SerialDescriptor;
    static listSerialDescriptor(): SerialDescriptor;
    static listSerialDescriptor(elementDescriptor: SerialDescriptor): SerialDescriptor;
    static mapSerialDescriptor(): SerialDescriptor;
    static mapSerialDescriptor(keyDescriptor: SerialDescriptor, valueDescriptor: SerialDescriptor): SerialDescriptor;
    static serialDescriptor(): SerialDescriptor;
    static serialDescriptor(type: KType): SerialDescriptor;
    static setSerialDescriptor(): SerialDescriptor;
    static setSerialDescriptor(elementDescriptor: SerialDescriptor): SerialDescriptor;
}