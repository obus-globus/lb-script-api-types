import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export interface JavaClassObjectAnnotationArgument extends Object, JavaAnnotationArgument{
    getReferencedType(): JavaType;
}