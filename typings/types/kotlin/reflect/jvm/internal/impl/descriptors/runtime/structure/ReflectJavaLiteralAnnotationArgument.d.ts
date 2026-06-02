import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument.d.ts'
import type { ReflectJavaAnnotationArgument$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument$Factory.d.ts'
import type { JavaLiteralAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaLiteralAnnotationArgument.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaLiteralAnnotationArgument extends ReflectJavaAnnotationArgument implements JavaLiteralAnnotationArgument {
    static Factory: ReflectJavaAnnotationArgument$Factory;
    constructor(arg0: Name, arg1: Object)
    readonly value: Object;
    getValue(): Object;
}