import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaLiteralAnnotationArgument extends Object, JavaAnnotationArgument{
    getName(): Name;
    getValue(): Object;
}