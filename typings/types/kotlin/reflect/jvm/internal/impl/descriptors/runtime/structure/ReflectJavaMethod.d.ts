import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { ReflectJavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaMember.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { ReflectJavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaTypeParameter.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { JavaMethod } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
export class ReflectJavaMethod extends ReflectJavaMember implements JavaMethod {
    constructor(arg0: Method)
    readonly member: Method;
    getAnnotationParameterDefaultValue(): JavaAnnotationArgument;
    getHasAnnotationParameterDefaultValue(): boolean;
    getMember(): Method;
    getReturnType(): ReflectJavaType;
    getTypeParameters(): ReflectJavaTypeParameter[];
    getValueParameters(): JavaValueParameter[];
    getValueParameters(arg0: Type[], arg1: Annotation[][], arg2: boolean): JavaValueParameter[];
}