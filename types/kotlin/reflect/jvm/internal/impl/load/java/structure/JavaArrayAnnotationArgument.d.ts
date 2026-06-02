import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
export interface JavaArrayAnnotationArgument extends Object, JavaAnnotationArgument{
    getElements(): JavaAnnotationArgument[];
}