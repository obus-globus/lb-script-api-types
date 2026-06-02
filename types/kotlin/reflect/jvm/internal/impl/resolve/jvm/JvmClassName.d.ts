import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JvmClassName extends Object {
    static byClassId(paramarg0: ClassId): JvmClassName;
    static byFqNameWithoutInnerClasses(paramarg0: FqName): JvmClassName;
    static byInternalName(paramarg0: string): JvmClassName;
    static internalNameByClassId(paramarg0: ClassId): string;
    private constructor(arg0: string)
    // private fqName: FqName;
    readonly internalName: string;
    equals(arg0: Object | null): boolean;
    getFqNameForTopLevelClassMaybeWithDollars(): FqName;
    getInternalName(): string;
    getPackageFqName(): FqName;
    hashCode(): number;
    toString(): string;
}