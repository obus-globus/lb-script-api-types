import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AnnotationQualifierApplicabilityType extends Enum<AnnotationQualifierApplicabilityType> {
    static FIELD: AnnotationQualifierApplicabilityType;
    static METHOD_RETURN_TYPE: AnnotationQualifierApplicabilityType;
    static TYPE_PARAMETER: AnnotationQualifierApplicabilityType;
    static TYPE_PARAMETER_BOUNDS: AnnotationQualifierApplicabilityType;
    static TYPE_USE: AnnotationQualifierApplicabilityType;
    static VALUE_PARAMETER: AnnotationQualifierApplicabilityType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AnnotationQualifierApplicabilityType;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly javaTarget: string;
    getJavaTarget(): string;
    name(): "METHOD_RETURN_TYPE" | "VALUE_PARAMETER" | "FIELD" | "TYPE_USE" | "TYPE_PARAMETER_BOUNDS" | "TYPE_PARAMETER";
}