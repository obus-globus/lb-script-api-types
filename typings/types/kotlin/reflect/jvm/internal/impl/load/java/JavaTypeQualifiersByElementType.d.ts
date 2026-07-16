import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
export class JavaTypeQualifiersByElementType extends Object {
    constructor(arg0: Map<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>)
    readonly defaultQualifiers: Map<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>;
    get(arg0: AnnotationQualifierApplicabilityType): JavaDefaultQualifiers;
    getDefaultQualifiers(): Map<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>;
}