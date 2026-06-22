import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaWildcardType extends Object, JavaType{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getBound(): JavaType;
    isDeprecatedInJavaDoc(): boolean;
    isExtends(): boolean;
}