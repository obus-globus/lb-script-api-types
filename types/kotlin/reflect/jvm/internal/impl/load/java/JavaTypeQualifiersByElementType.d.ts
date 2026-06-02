import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
export class JavaTypeQualifiersByElementType extends Object {
    constructor(arg0: { [key in AnnotationQualifierApplicabilityType]: JavaDefaultQualifiers })
    readonly defaultQualifiers: { [key in AnnotationQualifierApplicabilityType]: JavaDefaultQualifiers };
    get(arg0: AnnotationQualifierApplicabilityType): JavaDefaultQualifiers;
    getDefaultQualifiers(): { [key in AnnotationQualifierApplicabilityType]: JavaDefaultQualifiers };
}