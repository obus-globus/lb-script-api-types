import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaModifierListOwner.d.ts'
import type { JavaNamedElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaNamedElement.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaMember extends Object, JavaAnnotationOwner, JavaModifierListOwner, JavaNamedElement{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getContainingClass(): JavaClass;
    getName(): Name;
    getVisibility(): Visibility;
    isAbstract(): boolean;
    isDeprecatedInJavaDoc(): boolean;
    isFinal(): boolean;
    isStatic(): boolean;
}