import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export interface JavaAnnotation extends Object, JavaElement{
    getArguments(): JavaAnnotationArgument[];
    getClassId(): ClassId;
    isFreshlySupportedTypeUseAnnotation(): boolean;
    isIdeExternalAnnotation(): boolean;
    resolve(): JavaClass;
}