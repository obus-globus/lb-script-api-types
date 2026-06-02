import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Parameterizable extends Element, Object{
    getTypeParameters(): TypeParameterElement[];
}