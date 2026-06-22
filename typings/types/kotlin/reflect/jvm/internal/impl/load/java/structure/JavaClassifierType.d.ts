import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaClassifierType extends Object, JavaType{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getClassifier(): JavaClassifier;
    getClassifierQualifiedName(): string;
    getPresentableText(): string;
    getTypeArguments(): JavaType[];
    isDeprecatedInJavaDoc(): boolean;
    isRaw(): boolean;
}