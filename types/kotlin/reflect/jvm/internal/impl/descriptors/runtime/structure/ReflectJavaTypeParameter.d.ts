import type { AnnotatedElement } from '../../../../../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { TypeVariable } from '../../../../../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { ReflectJavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationOwner.d.ts'
import type { ReflectJavaClassifierType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaClassifierType.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaTypeParameter extends ReflectJavaElement implements ReflectJavaAnnotationOwner, JavaTypeParameter {
    constructor(arg0: TypeVariable<Object>)
    // private typeVariable: TypeVariable<Object>;
    equals(arg0: Object | null): boolean;
    findAnnotation(arg0: FqName): ReflectJavaAnnotation;
    getAnnotations(): ReflectJavaAnnotation[];
    getElement(): AnnotatedElement;
    getName(): Name;
    getUpperBounds(): ReflectJavaClassifierType[];
    hashCode(): number;
    isDeprecatedInJavaDoc(): boolean;
    toString(): string;
}