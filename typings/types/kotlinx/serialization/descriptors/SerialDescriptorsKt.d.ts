import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { ClassSerialDescriptorBuilder } from '../../../kotlinx/serialization/descriptors/ClassSerialDescriptorBuilder.d.ts'
import type { PrimitiveKind } from '../../../kotlinx/serialization/descriptors/PrimitiveKind.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { SerialKind } from '../../../kotlinx/serialization/descriptors/SerialKind.d.ts'
export class SerialDescriptorsKt extends Object {
    static PrimitiveSerialDescriptor(paramarg0: string, paramarg1: PrimitiveKind): SerialDescriptor;
    static SerialDescriptor(paramarg0: string, paramarg1: SerialDescriptor): SerialDescriptor;
    static buildClassSerialDescriptor(paramarg0: string, paramarg1: (Object | null)[], paramarg2: Function1<Object, void>): SerialDescriptor;
    static buildSerialDescriptor(paramarg0: string, paramarg1: SerialKind, paramarg2: (Object | null)[], paramarg3: Function1<Object, void>): SerialDescriptor;
    static element(paramarg0: ClassSerialDescriptorBuilder, paramarg1: string, paramarg2: (Object | null)[], paramarg3: boolean): void;
    static getNonNullOriginal(paramarg0: SerialDescriptor): SerialDescriptor;
    static getNullable(paramarg0: SerialDescriptor): SerialDescriptor;
    static listSerialDescriptor(): SerialDescriptor;
    static listSerialDescriptor(paramarg0: SerialDescriptor): SerialDescriptor;
    static mapSerialDescriptor(): SerialDescriptor;
    static mapSerialDescriptor(paramarg0: SerialDescriptor, paramarg1: SerialDescriptor): SerialDescriptor;
    static serialDescriptor(): SerialDescriptor;
    static serialDescriptor(paramarg0: KType): SerialDescriptor;
    static setSerialDescriptor(): SerialDescriptor;
    static setSerialDescriptor(paramarg0: SerialDescriptor): SerialDescriptor;
}