import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaAnnotationOwner extends Object, JavaElement{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getAnnotations(): JavaAnnotation[];
    isDeprecatedInJavaDoc(): boolean;
}