import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface QualifiedNameable extends Element, Object{
    getQualifiedName(): Name;
}