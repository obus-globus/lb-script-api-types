import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeMappingMode$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/TypeMappingMode$Companion.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class TypeMappingMode extends Object {
    static CLASS_DECLARATION: TypeMappingMode;
    static Companion: TypeMappingMode$Companion;
    static DEFAULT: TypeMappingMode;
    static DEFAULT_UAST: TypeMappingMode;
    static GENERIC_ARGUMENT: TypeMappingMode;
    static GENERIC_ARGUMENT_FOR_SUPER_TYPES_AS_IS: TypeMappingMode;
    static GENERIC_ARGUMENT_UAST: TypeMappingMode;
    static INVOKE_DYNAMIC_BOOTSTRAP_ARGUMENT: TypeMappingMode;
    static RETURN_TYPE_BOXED: TypeMappingMode;
    static SUPER_TYPE: TypeMappingMode;
    static SUPER_TYPE_AS_IS: TypeMappingMode;
    static SUPER_TYPE_KOTLIN_COLLECTIONS_AS_IS: TypeMappingMode;
    static VALUE_FOR_ANNOTATION: TypeMappingMode;
    constructor()
    constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: TypeMappingMode, arg6: boolean, arg7: TypeMappingMode, arg8: TypeMappingMode, arg9: boolean, arg10: boolean)
    // private genericArgumentMode: TypeMappingMode;
    // private genericContravariantArgumentMode: TypeMappingMode;
    // private genericInvariantArgumentMode: TypeMappingMode;
    // private ignoreTypeArgumentsBounds: boolean;
    // private isForAnnotationParameter: boolean;
    readonly kotlinCollectionsToJavaCollections: boolean;
    readonly mapTypeAliases: boolean;
    readonly needInlineClassWrapping: boolean;
    readonly needPrimitiveBoxing: boolean;
    // private skipDeclarationSiteWildcards: boolean;
    // private skipDeclarationSiteWildcardsIfPossible: boolean;
    getKotlinCollectionsToJavaCollections(): boolean;
    getMapTypeAliases(): boolean;
    getNeedInlineClassWrapping(): boolean;
    getNeedPrimitiveBoxing(): boolean;
    isForAnnotationParameter(): boolean;
    toGenericArgumentMode(arg0: Variance, arg1: boolean): TypeMappingMode;
    wrapInlineClassesMode(): TypeMappingMode;
}