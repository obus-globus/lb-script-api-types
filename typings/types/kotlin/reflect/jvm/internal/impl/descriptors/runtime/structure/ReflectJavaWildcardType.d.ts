import type { WildcardType } from '../../../../../../../../java/lang/reflect/WildcardType.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { ReflectJavaType$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType$Factory.d.ts'
import type { JavaWildcardType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaWildcardType.d.ts'
export class ReflectJavaWildcardType extends ReflectJavaType implements JavaWildcardType {
    static Factory: ReflectJavaType$Factory;
    constructor(arg0: WildcardType)
    readonly annotations: E[];
    // private isDeprecatedInJavaDoc: boolean;
    readonly reflectType: WildcardType;
    getAnnotations(): E[];
    getBound(): ReflectJavaType;
    getReflectType(): WildcardType;
    isDeprecatedInJavaDoc(): boolean;
    isExtends(): boolean;
}