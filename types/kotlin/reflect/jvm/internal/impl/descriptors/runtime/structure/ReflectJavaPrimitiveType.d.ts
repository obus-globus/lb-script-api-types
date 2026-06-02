import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { ReflectJavaType$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType$Factory.d.ts'
import type { JavaPrimitiveType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPrimitiveType.d.ts'
export class ReflectJavaPrimitiveType extends ReflectJavaType implements JavaPrimitiveType {
    static Factory: ReflectJavaType$Factory;
    constructor(arg0: Class<Object>)
    readonly annotations: E[];
    // private isDeprecatedInJavaDoc: boolean;
    readonly reflectType: Class<Object>;
    getAnnotations(): E[];
    getReflectType(): Class<Object>;
    getType(): PrimitiveType;
    isDeprecatedInJavaDoc(): boolean;
}