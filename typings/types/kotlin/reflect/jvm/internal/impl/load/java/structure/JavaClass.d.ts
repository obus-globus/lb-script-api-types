import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaModifierListOwner.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
import type { LightClassOriginKind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/LightClassOriginKind.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaClass extends Object, JavaClassifier, JavaModifierListOwner, JavaTypeParameterListOwner{
    getConstructors(): E[];
    getFields(): E[];
    getFqName(): FqName;
    getInnerClassNames(): E[];
    getLightClassOriginKind(): LightClassOriginKind;
    getMethods(): E[];
    getOuterClass(): JavaClass;
    getRecordComponents(): E[];
    getSupertypes(): E[];
    hasDefaultConstructor(): boolean;
    isAnnotationType(): boolean;
    isEnum(): boolean;
    isInterface(): boolean;
    isRecord(): boolean;
    isSealed(): boolean;
}