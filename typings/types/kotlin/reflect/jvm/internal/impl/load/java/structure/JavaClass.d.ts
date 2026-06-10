import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaClassifier } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifier.d.ts'
import type { JavaClassifierType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifierType.d.ts'
import type { JavaConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaConstructor.d.ts'
import type { JavaField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaField.d.ts'
import type { JavaMethod } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMethod.d.ts'
import type { JavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaModifierListOwner.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
import type { LightClassOriginKind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/LightClassOriginKind.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaClass extends Object, JavaClassifier, JavaModifierListOwner, JavaTypeParameterListOwner{
    getConstructors(): JavaConstructor[];
    getFields(): JavaField[];
    getFqName(): FqName;
    getInnerClassNames(): Name[];
    getLightClassOriginKind(): LightClassOriginKind;
    getMethods(): JavaMethod[];
    getOuterClass(): JavaClass;
    getRecordComponents(): JavaRecordComponent[];
    getSupertypes(): JavaClassifierType[];
    hasDefaultConstructor(): boolean;
    isAnnotationType(): boolean;
    isEnum(): boolean;
    isInterface(): boolean;
    isRecord(): boolean;
    isSealed(): boolean;
}