import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaElement.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaNamedElement extends Object, JavaElement{
    getName(): Name;
}