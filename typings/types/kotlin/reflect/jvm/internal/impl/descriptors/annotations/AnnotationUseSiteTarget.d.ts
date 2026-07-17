import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AnnotationUseSiteTarget extends Enum<AnnotationUseSiteTarget> {
    static ALL: AnnotationUseSiteTarget;
    static CONSTRUCTOR_PARAMETER: AnnotationUseSiteTarget;
    static FIELD: AnnotationUseSiteTarget;
    static FILE: AnnotationUseSiteTarget;
    static PROPERTY: AnnotationUseSiteTarget;
    static PROPERTY_DELEGATE_FIELD: AnnotationUseSiteTarget;
    static PROPERTY_GETTER: AnnotationUseSiteTarget;
    static PROPERTY_SETTER: AnnotationUseSiteTarget;
    static RECEIVER: AnnotationUseSiteTarget;
    static SETTER_PARAMETER: AnnotationUseSiteTarget;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AnnotationUseSiteTarget;
    static values(): AnnotationUseSiteTarget[];
    private constructor(arg2: string)
    readonly renderName: string;
    getRenderName(): string;
    name(): "ALL" | "FIELD" | "FILE" | "PROPERTY" | "PROPERTY_GETTER" | "PROPERTY_SETTER" | "RECEIVER" | "CONSTRUCTOR_PARAMETER" | "SETTER_PARAMETER" | "PROPERTY_DELEGATE_FIELD";
}