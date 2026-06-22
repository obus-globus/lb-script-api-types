import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PrimitiveType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaPrimitiveType extends Object, JavaType{
    findAnnotation(arg0: FqName): JavaAnnotation;
    getType(): PrimitiveType;
    isDeprecatedInJavaDoc(): boolean;
}