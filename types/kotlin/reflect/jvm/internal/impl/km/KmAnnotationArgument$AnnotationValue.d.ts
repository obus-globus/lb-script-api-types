import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmAnnotationArgument } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotationArgument.d.ts'
export class KmAnnotationArgument$AnnotationValue extends KmAnnotationArgument {
    constructor(arg0: KmAnnotation)
    readonly annotation: KmAnnotation;
    equals(arg0: Object | null): boolean;
    getAnnotation(): KmAnnotation;
    hashCode(): number;
    toString(): string;
}