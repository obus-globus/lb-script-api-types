import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { ReflectJavaType$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType$Factory.d.ts'
import type { JavaArrayType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaArrayType.d.ts'
export class ReflectJavaArrayType extends ReflectJavaType implements JavaArrayType {
    static Factory: ReflectJavaType$Factory;
    constructor(arg0: Type)
    readonly annotations: E[];
    readonly componentType: ReflectJavaType;
    // private isDeprecatedInJavaDoc: boolean;
    // private reflectType: Type;
    getAnnotations(): E[];
    getComponentType(): ReflectJavaType;
    getReflectType(): Type;
    isDeprecatedInJavaDoc(): boolean;
}