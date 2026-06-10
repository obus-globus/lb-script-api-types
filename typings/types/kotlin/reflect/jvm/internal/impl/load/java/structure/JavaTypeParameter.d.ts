import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaClassifierType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifierType.d.ts'
export interface JavaTypeParameter extends Object, JavaClassifier{
    getUpperBounds(): JavaClassifierType[];
}