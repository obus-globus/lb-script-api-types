import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationQualifierApplicabilityType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/AnnotationQualifierApplicabilityType.d.ts'
import type { JavaDefaultQualifiers } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaDefaultQualifiers.d.ts'
export class JavaTypeQualifiersByElementType extends Object {
    constructor(arg0: JavaMap<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>)
    readonly defaultQualifiers: JavaMap<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>;
    get(arg0: AnnotationQualifierApplicabilityType): JavaDefaultQualifiers;
    getDefaultQualifiers(): JavaMap<AnnotationQualifierApplicabilityType, JavaDefaultQualifiers>;
}