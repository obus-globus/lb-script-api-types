import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class ExcludedTypeAnnotations extends Object {
    static INSTANCE: ExcludedTypeAnnotations;
    private constructor()
    getInternalAnnotationsForResolve(): FqName[];
}