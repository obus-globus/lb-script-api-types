import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaToKotlinClassMap$PlatformMutabilityMapping } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JavaToKotlinClassMap$PlatformMutabilityMapping.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
export class JavaToKotlinClassMap extends Object {
    static INSTANCE: JavaToKotlinClassMap;
    private constructor()
    // private add(arg0: ClassId, arg1: ClassId): void;
    // private addJavaToKotlin(arg0: ClassId, arg1: ClassId): void;
    // private addKotlinToJava(arg0: FqName, arg1: ClassId): void;
    // private addMapping(arg0: JavaToKotlinClassMap$PlatformMutabilityMapping): void;
    // private addTopLevel(arg0: Class<Object>, arg1: FqName): void;
    // private addTopLevel(arg0: Class<Object>, arg1: FqNameUnsafe): void;
    // private classId(arg0: Class<Object>): ClassId;
    getFUNCTION_N_FQ_NAME(): FqName;
    getMutabilityMappings(): JavaToKotlinClassMap$PlatformMutabilityMapping[];
    // private isKotlinFunctionWithBigArity(arg0: FqNameUnsafe, arg1: string, arg2: boolean): boolean;
    isMutable(arg0: ClassId): boolean;
    isMutable(arg0: FqNameUnsafe): boolean;
    isReadOnly(arg0: FqNameUnsafe): boolean;
    mapJavaToKotlin(arg0: FqName): ClassId;
    mapKotlinToJava(arg0: FqNameUnsafe): ClassId;
    mutableToReadOnly(arg0: FqNameUnsafe): FqName;
    readOnlyToMutable(arg0: FqNameUnsafe): FqName;
}