import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FunctionTypeKind$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionTypeKind$Companion.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class FunctionTypeKind extends Object {
    static Companion: FunctionTypeKind$Companion;
    constructor(arg0: FqName, arg1: string, arg2: boolean, arg3: ClassId, arg4: boolean, arg5: number)
    // private annotationOnInvokeClassId: ClassId;
    readonly classNamePrefix: string;
    // private isInlineable: boolean;
    // private isReflectType: boolean;
    readonly maxArity: number;
    readonly packageFqName: FqName;
    getClassNamePrefix(): string;
    getMaxArity(): number;
    getPackageFqName(): FqName;
    numberedClassId(arg0: number): ClassId;
    numberedClassName(arg0: number): Name;
    toString(): string;
}