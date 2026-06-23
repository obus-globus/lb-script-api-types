import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { ReflectJavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument.d.ts'
import type { ReflectJavaAnnotationArgument$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationArgument$Factory.d.ts'
import type { JavaEnumValueAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaEnumValueAnnotationArgument.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaEnumValueAnnotationArgument extends ReflectJavaAnnotationArgument implements JavaEnumValueAnnotationArgument {
    static Factory: ReflectJavaAnnotationArgument$Factory;
    constructor(arg0: Name, arg1: Enum<any>)
    // private value: Enum<any>;
    getEntryName(): Name;
    getEnumClassId(): ClassId;
}