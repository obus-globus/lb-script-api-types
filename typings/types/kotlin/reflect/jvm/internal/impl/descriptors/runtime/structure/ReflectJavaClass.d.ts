import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { ReflectJavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotation.d.ts'
import type { ReflectJavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaAnnotationOwner.d.ts'
import type { ReflectJavaConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaConstructor.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { ReflectJavaField } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaField.d.ts'
import type { ReflectJavaMethod } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaMethod.d.ts'
import type { ReflectJavaModifierListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaModifierListOwner.d.ts'
import type { ReflectJavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaTypeParameter.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaClassifierType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifierType.d.ts'
import type { JavaRecordComponent } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaRecordComponent.d.ts'
import type { LightClassOriginKind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/LightClassOriginKind.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaClass extends ReflectJavaElement implements ReflectJavaAnnotationOwner, ReflectJavaModifierListOwner, JavaClass {
    constructor(arg0: Class<Object>)
    // private klass: Class<Object>;
    equals(arg0: Object | null): boolean;
    findAnnotation(arg0: FqName): ReflectJavaAnnotation;
    getAnnotations(): ReflectJavaAnnotation[];
    getConstructors(): ReflectJavaConstructor[];
    getElement(): Class<Object>;
    getFields(): ReflectJavaField[];
    getFqName(): FqName;
    getInnerClassNames(): Name[];
    getLightClassOriginKind(): LightClassOriginKind;
    getMethods(): ReflectJavaMethod[];
    getModifiers(): number;
    getName(): Name;
    getOuterClass(): ReflectJavaClass;
    getRecordComponents(): JavaRecordComponent[];
    getSupertypes(): JavaClassifierType[];
    getTypeParameters(): ReflectJavaTypeParameter[];
    getVisibility(): Visibility;
    hasDefaultConstructor(): boolean;
    hashCode(): number;
    isAbstract(): boolean;
    isAnnotationType(): boolean;
    isDeprecatedInJavaDoc(): boolean;
    isEnum(): boolean;
    // private isEnumValuesOrValueOf(arg0: Method): boolean;
    isFinal(): boolean;
    isInterface(): boolean;
    isRecord(): boolean;
    isSealed(): boolean;
    isStatic(): boolean;
    toString(): string;
}