import type { AnnotatedElement } from '../../../../../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Member } from '../../../../../../../../java/lang/reflect/Member.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { ReflectJavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationOwner.d.ts'
import type { ReflectJavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaClass.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { ReflectJavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaModifierListOwner.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class ReflectJavaMember extends ReflectJavaElement implements ReflectJavaAnnotationOwner, ReflectJavaModifierListOwner, JavaMember {
    constructor()
    equals(arg0: Object | null): boolean;
    findAnnotation(arg0: FqName): ReflectJavaAnnotation;
    getAnnotations(): ReflectJavaAnnotation[];
    getContainingClass(): ReflectJavaClass;
    getElement(): AnnotatedElement;
    getMember(): Member;
    getModifiers(): number;
    getName(): Name;
    getValueParameters(arg0: Type[], arg1: Annotation[][], arg2: boolean): JavaValueParameter[];
    getVisibility(): Visibility;
    hashCode(): number;
    isAbstract(): boolean;
    isDeprecatedInJavaDoc(): boolean;
    isFinal(): boolean;
    isStatic(): boolean;
    toString(): string;
}