import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
import type { JavaTypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameter.d.ts'
export interface JavaTypeParameterListOwner extends Object, JavaElement{
    getTypeParameters(): JavaTypeParameter[];
}