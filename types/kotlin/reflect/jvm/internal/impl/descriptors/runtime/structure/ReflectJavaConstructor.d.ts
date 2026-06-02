import type { Constructor } from '../../../../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaMember.d.ts'
import type { ReflectJavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaTypeParameter.d.ts'
import type { JavaConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaConstructor.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
export class ReflectJavaConstructor extends ReflectJavaMember implements JavaConstructor {
    constructor(arg0: Constructor<Object>)
    readonly member: Constructor<Object>;
    getMember(): Constructor<Object>;
    getTypeParameters(): ReflectJavaTypeParameter[];
    getValueParameters(): JavaValueParameter[];
}