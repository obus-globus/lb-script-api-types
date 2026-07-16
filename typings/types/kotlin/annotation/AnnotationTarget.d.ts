import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class AnnotationTarget extends Enum<AnnotationTarget> implements Serializable {
    static ANNOTATION_CLASS: AnnotationTarget;
    static CLASS: AnnotationTarget;
    static CONSTRUCTOR: AnnotationTarget;
    static EXPRESSION: AnnotationTarget;
    static FIELD: AnnotationTarget;
    static FILE: AnnotationTarget;
    static FUNCTION: AnnotationTarget;
    static LOCAL_VARIABLE: AnnotationTarget;
    static PROPERTY: AnnotationTarget;
    static PROPERTY_GETTER: AnnotationTarget;
    static PROPERTY_SETTER: AnnotationTarget;
    static TYPE: AnnotationTarget;
    static TYPEALIAS: AnnotationTarget;
    static TYPE_PARAMETER: AnnotationTarget;
    static VALUE_PARAMETER: AnnotationTarget;
    static getEntries(): AnnotationTarget[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AnnotationTarget;
    static values(): AnnotationTarget[];
    private constructor()
    name(): "CLASS" | "ANNOTATION_CLASS" | "TYPE_PARAMETER" | "PROPERTY" | "FIELD" | "LOCAL_VARIABLE" | "VALUE_PARAMETER" | "CONSTRUCTOR" | "FUNCTION" | "PROPERTY_GETTER" | "PROPERTY_SETTER" | "TYPE" | "EXPRESSION" | "FILE" | "TYPEALIAS";
}