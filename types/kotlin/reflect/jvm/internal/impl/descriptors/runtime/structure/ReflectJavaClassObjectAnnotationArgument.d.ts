import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument.d.ts'
import type { ReflectJavaAnnotationArgument$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument$Factory.d.ts'
import type { JavaClassObjectAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassObjectAnnotationArgument.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaClassObjectAnnotationArgument extends ReflectJavaAnnotationArgument implements JavaClassObjectAnnotationArgument {
    static Factory: ReflectJavaAnnotationArgument$Factory;
    constructor(arg0: Name, arg1: Class<Object>)
    // private klass: Class<Object>;
    getReferencedType(): JavaType;
}