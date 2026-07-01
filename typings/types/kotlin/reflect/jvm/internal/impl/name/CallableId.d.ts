import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableId$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/CallableId$Companion.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class CallableId extends Object {
    static Companion: CallableId$Companion;
    constructor(arg0: FqName, arg1: Name)
    // private callableName: Name;
    // private classId: ClassId;
    // private className: FqName;
    // private packageName: FqName;
    // private pathToLocal: FqName;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}