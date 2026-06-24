import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ReflectJavaAnnotationArgument$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument$Factory.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class ReflectJavaAnnotationArgument extends Object implements JavaAnnotationArgument {
    static Factory: ReflectJavaAnnotationArgument$Factory;
    private constructor(arg0: Name)
    constructor(arg0: Name, arg1: DefaultConstructorMarker)
    readonly name: Name;
    getName(): Name;
}