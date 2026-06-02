import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
export interface JavaClassifierType extends Object, JavaType{
    getClassifier(): JavaClassifier;
    getClassifierQualifiedName(): string;
    getPresentableText(): string;
    getTypeArguments(): JavaType[];
    isRaw(): boolean;
}