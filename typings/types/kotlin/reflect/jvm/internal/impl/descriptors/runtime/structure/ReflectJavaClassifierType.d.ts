import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { ReflectJavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType.d.ts'
import type { ReflectJavaType$Factory } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaType$Factory.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaClassifierType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifierType.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class ReflectJavaClassifierType extends ReflectJavaType implements JavaClassifierType {
    static Factory: ReflectJavaType$Factory;
    constructor(arg0: Type)
    readonly classifier: JavaClassifier;
    readonly reflectType: Type;
    findAnnotation(arg0: FqName): JavaAnnotation;
    getAnnotations(): E[];
    getClassifier(): JavaClassifier;
    getClassifierQualifiedName(): string;
    getPresentableText(): string;
    getReflectType(): Type;
    getTypeArguments(): JavaType[];
    isDeprecatedInJavaDoc(): boolean;
    isRaw(): boolean;
}