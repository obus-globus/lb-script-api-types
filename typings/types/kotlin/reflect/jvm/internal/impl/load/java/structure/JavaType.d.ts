import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { ListBasedJavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/ListBasedJavaAnnotationOwner.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaType extends Object, ListBasedJavaAnnotationOwner{
    findAnnotation(arg0: FqName): JavaAnnotation;
    isDeprecatedInJavaDoc(): boolean;
}