import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class CompanionObjectMapping extends Object {
    static INSTANCE: CompanionObjectMapping;
    private constructor()
    allClassesWithIntrinsicCompanions(): ClassId[];
    getClassIds(): ClassId[];
}