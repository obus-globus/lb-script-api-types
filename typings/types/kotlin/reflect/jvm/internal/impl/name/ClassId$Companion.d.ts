import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class ClassId$Companion extends Object {
    private constructor()
    fromString(arg0: string, arg1: boolean): ClassId;
    topLevel(arg0: FqName): ClassId;
}