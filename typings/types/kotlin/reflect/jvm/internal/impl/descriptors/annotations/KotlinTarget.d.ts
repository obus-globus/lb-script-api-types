import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinTarget$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/KotlinTarget$Companion.d.ts'
export class KotlinTarget extends Enum<KotlinTarget> {
    static ANNOTATION_CLASS: KotlinTarget;
    static ANONYMOUS_FUNCTION: KotlinTarget;
    static BACKING_FIELD: KotlinTarget;
    static CLASS: KotlinTarget;
    static CLASS_ONLY: KotlinTarget;
    static COMPANION_EXTENSION_FUNCTION: KotlinTarget;
    static COMPANION_EXTENSION_PROPERTY: KotlinTarget;
    static COMPANION_MEMBER_FUNCTION: KotlinTarget;
    static COMPANION_MEMBER_PROPERTY: KotlinTarget;
    static COMPANION_OBJECT: KotlinTarget;
    static CONSTRUCTOR: KotlinTarget;
    static Companion: KotlinTarget$Companion;
    static DESTRUCTURING_DECLARATION: KotlinTarget;
    static ENUM_CLASS: KotlinTarget;
    static ENUM_ENTRY: KotlinTarget;
    static EXPRESSION: KotlinTarget;
    static FIELD: KotlinTarget;
    static FILE: KotlinTarget;
    static FUNCTION: KotlinTarget;
    static INITIALIZER: KotlinTarget;
    static INTERFACE: KotlinTarget;
    static LAMBDA_EXPRESSION: KotlinTarget;
    static LOCAL_CLASS: KotlinTarget;
    static LOCAL_FUNCTION: KotlinTarget;
    static LOCAL_VARIABLE: KotlinTarget;
    static MEMBER_FUNCTION: KotlinTarget;
    static MEMBER_PROPERTY: KotlinTarget;
    static MEMBER_PROPERTY_WITHOUT_FIELD_OR_DELEGATE: KotlinTarget;
    static MEMBER_PROPERTY_WITH_BACKING_FIELD: KotlinTarget;
    static MEMBER_PROPERTY_WITH_DELEGATE: KotlinTarget;
    static OBJECT: KotlinTarget;
    static OBJECT_LITERAL: KotlinTarget;
    static PROPERTY: KotlinTarget;
    static PROPERTY_GETTER: KotlinTarget;
    static PROPERTY_PARAMETER: KotlinTarget;
    static PROPERTY_SETTER: KotlinTarget;
    static STANDALONE_OBJECT: KotlinTarget;
    static STAR_PROJECTION: KotlinTarget;
    static TOP_LEVEL_FUNCTION: KotlinTarget;
    static TOP_LEVEL_PROPERTY: KotlinTarget;
    static TOP_LEVEL_PROPERTY_WITHOUT_FIELD_OR_DELEGATE: KotlinTarget;
    static TOP_LEVEL_PROPERTY_WITH_BACKING_FIELD: KotlinTarget;
    static TOP_LEVEL_PROPERTY_WITH_DELEGATE: KotlinTarget;
    static TYPE: KotlinTarget;
    static TYPEALIAS: KotlinTarget;
    static TYPE_PARAMETER: KotlinTarget;
    static TYPE_PROJECTION: KotlinTarget;
    static VALUE_PARAMETER: KotlinTarget;
    static getEntries(): KotlinTarget[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KotlinTarget;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: boolean)
    constructor(arg2: string, arg3: boolean, arg4: number, arg5: DefaultConstructorMarker)
    // private description: string;
    // private isDefault: boolean;
    name(): "CLASS" | "ANNOTATION_CLASS" | "TYPE_PARAMETER" | "PROPERTY" | "FIELD" | "LOCAL_VARIABLE" | "VALUE_PARAMETER" | "CONSTRUCTOR" | "FUNCTION" | "PROPERTY_GETTER" | "PROPERTY_SETTER" | "TYPE" | "EXPRESSION" | "FILE" | "TYPEALIAS" | "TYPE_PROJECTION" | "STAR_PROJECTION" | "PROPERTY_PARAMETER" | "CLASS_ONLY" | "OBJECT" | "STANDALONE_OBJECT" | "COMPANION_OBJECT" | "INTERFACE" | "ENUM_CLASS" | "ENUM_ENTRY" | "LOCAL_CLASS" | "LOCAL_FUNCTION" | "MEMBER_FUNCTION" | "COMPANION_MEMBER_FUNCTION" | "TOP_LEVEL_FUNCTION" | "COMPANION_EXTENSION_FUNCTION" | "MEMBER_PROPERTY" | "COMPANION_MEMBER_PROPERTY" | "MEMBER_PROPERTY_WITH_BACKING_FIELD" | "MEMBER_PROPERTY_WITH_DELEGATE" | "MEMBER_PROPERTY_WITHOUT_FIELD_OR_DELEGATE" | "TOP_LEVEL_PROPERTY" | "COMPANION_EXTENSION_PROPERTY" | "TOP_LEVEL_PROPERTY_WITH_BACKING_FIELD" | "TOP_LEVEL_PROPERTY_WITH_DELEGATE" | "TOP_LEVEL_PROPERTY_WITHOUT_FIELD_OR_DELEGATE" | "BACKING_FIELD" | "INITIALIZER" | "DESTRUCTURING_DECLARATION" | "LAMBDA_EXPRESSION" | "ANONYMOUS_FUNCTION" | "OBJECT_LITERAL";
}