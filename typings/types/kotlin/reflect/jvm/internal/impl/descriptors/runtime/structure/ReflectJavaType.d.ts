import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaType$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType$Factory.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export abstract class ReflectJavaType extends Object implements JavaType {
    static Factory: ReflectJavaType$Factory;
    constructor()
    equals(arg0: Object | null): boolean;
    findAnnotation(arg0: FqName): JavaAnnotation;
    getReflectType(): Type;
    hashCode(): number;
    toString(): string;
}