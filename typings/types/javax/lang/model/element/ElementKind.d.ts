import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ElementKind extends Enum<ElementKind> {
    static ANNOTATION_TYPE: ElementKind;
    static BINDING_VARIABLE: ElementKind;
    static CLASS: ElementKind;
    static CONSTRUCTOR: ElementKind;
    static ENUM: ElementKind;
    static ENUM_CONSTANT: ElementKind;
    static EXCEPTION_PARAMETER: ElementKind;
    static FIELD: ElementKind;
    static INSTANCE_INIT: ElementKind;
    static INTERFACE: ElementKind;
    static LOCAL_VARIABLE: ElementKind;
    static METHOD: ElementKind;
    static MODULE: ElementKind;
    static OTHER: ElementKind;
    static PACKAGE: ElementKind;
    static PARAMETER: ElementKind;
    static RECORD: ElementKind;
    static RECORD_COMPONENT: ElementKind;
    static RESOURCE_VARIABLE: ElementKind;
    static STATIC_INIT: ElementKind;
    static TYPE_PARAMETER: ElementKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ElementKind;
    static values(): ElementKind[];
    private constructor()
    isClass(): boolean;
    isDeclaredType(): boolean;
    isExecutable(): boolean;
    isField(): boolean;
    isInitializer(): boolean;
    isInterface(): boolean;
    isVariable(): boolean;
    name(): "PACKAGE" | "ENUM" | "CLASS" | "ANNOTATION_TYPE" | "INTERFACE" | "ENUM_CONSTANT" | "FIELD" | "PARAMETER" | "LOCAL_VARIABLE" | "EXCEPTION_PARAMETER" | "METHOD" | "CONSTRUCTOR" | "STATIC_INIT" | "INSTANCE_INIT" | "TYPE_PARAMETER" | "OTHER" | "RESOURCE_VARIABLE" | "MODULE" | "RECORD" | "RECORD_COMPONENT" | "BINDING_VARIABLE";
}