import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaMember } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaMember.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
import type { JavaValueParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaValueParameter.d.ts'
export interface JavaConstructor extends Object, JavaMember, JavaTypeParameterListOwner{
    getValueParameters(): JavaValueParameter[];
}