import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Visibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaField extends Object, JavaMember{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getContainingClass(): JavaClass;
    getHasConstantNotNullInitializer(): boolean;
    getName(): Name;
    getType(): JavaType;
    getVisibility(): Visibility;
    isAbstract(): boolean;
    isDeprecatedInJavaDoc(): boolean;
    isEnumEntry(): boolean;
    isFinal(): boolean;
    isStatic(): boolean;
}