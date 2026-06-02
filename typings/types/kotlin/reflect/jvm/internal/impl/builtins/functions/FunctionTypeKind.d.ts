import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class FunctionTypeKind extends Object {
    constructor(arg0: FqName, arg1: string, arg2: boolean, arg3: ClassId, arg4: boolean)
    // private annotationOnInvokeClassId: ClassId;
    readonly classNamePrefix: string;
    // private isInlineable: boolean;
    // private isReflectType: boolean;
    readonly packageFqName: FqName;
    getClassNamePrefix(): string;
    getPackageFqName(): FqName;
    numberedClassId(arg0: number): ClassId;
    numberedClassName(arg0: number): Name;
    toString(): string;
}