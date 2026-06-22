import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { JavaNamedElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaNamedElement.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaClassifier extends Object, JavaAnnotationOwner, JavaNamedElement{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getName(): Name;
    isDeprecatedInJavaDoc(): boolean;
}