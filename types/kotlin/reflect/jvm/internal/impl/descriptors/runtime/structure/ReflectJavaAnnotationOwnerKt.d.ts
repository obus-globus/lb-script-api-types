import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class ReflectJavaAnnotationOwnerKt extends Object {
    static findAnnotation(paramarg0: (Object | null)[], paramarg1: FqName): ReflectJavaAnnotation;
    static getAnnotations(paramarg0: (Object | null)[]): ReflectJavaAnnotation[];
}