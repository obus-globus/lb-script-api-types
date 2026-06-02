import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
export interface JavaMethod extends Object, JavaMember, JavaTypeParameterListOwner{
    getAnnotationParameterDefaultValue(): JavaAnnotationArgument;
    getHasAnnotationParameterDefaultValue(): boolean;
    getReturnType(): JavaType;
    getValueParameters(): JavaValueParameter[];
}