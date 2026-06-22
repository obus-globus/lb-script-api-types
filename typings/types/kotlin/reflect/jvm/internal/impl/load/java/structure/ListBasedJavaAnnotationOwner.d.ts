import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface ListBasedJavaAnnotationOwner extends Object, JavaAnnotationOwner{
    findAnnotation(arg0: FqName): JavaAnnotation;
    isDeprecatedInJavaDoc(): boolean;
}