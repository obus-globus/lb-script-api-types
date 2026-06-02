import type { AnnotatedElement } from '../../../../../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface ReflectJavaAnnotationOwner extends Object, JavaAnnotationOwner{
    findAnnotation(arg0: FqName): ReflectJavaAnnotation;
    getAnnotations(): ReflectJavaAnnotation[];
    getElement(): AnnotatedElement;
}