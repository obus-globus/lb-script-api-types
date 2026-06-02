import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class StandardNames extends Object {
    static ANNOTATION_PACKAGE_FQ_NAME: FqName;
    static BACKING_FIELD: Name;
    static BUILT_INS_PACKAGE_FQ_NAME: FqName;
    static BUILT_INS_PACKAGE_FQ_NAMES: FqName[];
    static BUILT_INS_PACKAGE_NAME: Name;
    static CHAR_CODE: Name;
    static COLLECTIONS_PACKAGE_FQ_NAME: FqName;
    static CONCURRENT_ATOMICS_PACKAGE_FQ_NAME: FqName;
    static CONCURRENT_PACKAGE_FQ_NAME: FqName;
    static CONTEXT_FUNCTION_TYPE_PARAMETER_COUNT_NAME: Name;
    static CONTINUATION_INTERFACE_FQ_NAME: FqName;
    static COROUTINES_INTRINSICS_PACKAGE_FQ_NAME: FqName;
    static COROUTINES_JVM_INTERNAL_PACKAGE_FQ_NAME: FqName;
    static COROUTINES_PACKAGE_FQ_NAME: FqName;
    static COROUTINE_SUSPENDED_NAME: Name;
    static DATA_CLASS_COMPONENT_PREFIX: string;
    static DATA_CLASS_COPY: Name;
    static DEFAULT_VALUE_PARAMETER: Name;
    static DYNAMIC_FQ_NAME: FqName;
    static ENUM_ENTRIES: Name;
    static ENUM_VALUES: Name;
    static ENUM_VALUE_OF: Name;
    static EQUALS_NAME: Name;
    static HASHCODE_NAME: Name;
    static IMPLICIT_LAMBDA_PARAMETER_NAME: Name;
    static INSTANCE: StandardNames;
    static KOTLIN_INTERNAL_FQ_NAME: FqName;
    static KOTLIN_REFLECT_FQ_NAME: FqName;
    static MAIN: Name;
    static MAP_ENTRY_KEY: Name;
    static MAP_ENTRY_VALUE: Name;
    static NAME: Name;
    static NEXT_CHAR: Name;
    static PREFIXES: string[];
    static RANGES_PACKAGE_FQ_NAME: FqName;
    static RESULT_FQ_NAME: FqName;
    static TEXT_PACKAGE_FQ_NAME: FqName;
    static TO_STRING_NAME: Name;
    static getFunctionClassId(paramarg0: number): ClassId;
    static getFunctionName(paramarg0: number): string;
    static getPrimitiveFqName(paramarg0: PrimitiveType): FqName;
    static getSuspendFunctionName(paramarg0: number): string;
    static isPrimitiveArray(paramarg0: FqNameUnsafe): boolean;
    private constructor()
}