import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaModifierListOwner.d.ts'
import type { JavaNamedElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaNamedElement.d.ts'
export interface JavaMember extends Object, JavaAnnotationOwner, JavaModifierListOwner, JavaNamedElement{
    getContainingClass(): JavaClass;
}