import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaClass.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class ReflectJavaAnnotation extends ReflectJavaElement implements JavaAnnotation {
    constructor(arg0: Annotation)
    readonly annotation: Annotation;
    equals(arg0: Object | null): boolean;
    getAnnotation(): Annotation;
    getArguments(): JavaAnnotationArgument[];
    getClassId(): ClassId;
    hashCode(): number;
    isFreshlySupportedTypeUseAnnotation(): boolean;
    isIdeExternalAnnotation(): boolean;
    resolve(): ReflectJavaClass;
    toString(): string;
}