import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmAnnotationArgument } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
export class ReadUtilsKt extends Object {
    static getClassName(paramarg0: NameResolver, paramarg1: number): string;
    static readAnnotation(paramarg0: ProtoBuf$Annotation, paramarg1: NameResolver): KmAnnotation;
    static readAnnotationArgument(paramarg0: ProtoBuf$Annotation$Argument$Value, paramarg1: NameResolver): KmAnnotationArgument;
}