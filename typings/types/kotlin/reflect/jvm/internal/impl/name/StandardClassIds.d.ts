import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class StandardClassIds extends Object {
    static INSTANCE: StandardClassIds;
    private constructor()
    getArray(): ClassId;
    getBASE_ANNOTATION_PACKAGE(): FqName;
    getBASE_COLLECTIONS_PACKAGE(): FqName;
    getBASE_CONCURRENT_ATOMICS_PACKAGE(): FqName;
    getBASE_COROUTINES_PACKAGE(): FqName;
    getBASE_ENUMS_PACKAGE(): FqName;
    getBASE_KOTLIN_PACKAGE(): FqName;
    getBASE_RANGES_PACKAGE(): FqName;
    getBASE_REFLECT_PACKAGE(): FqName;
    getBASE_SEQUENCES_PACKAGE(): FqName;
    getEnumEntries(): ClassId;
    getKClass(): ClassId;
    getKFunction(): ClassId;
    getMutableList(): ClassId;
    getMutableMap(): ClassId;
    getMutableSet(): ClassId;
}