import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export interface JavaModuleAnnotationsProvider extends Object{
    getAnnotationsForModuleOwnerOfClass(arg0: ClassId): JavaAnnotation[];
}