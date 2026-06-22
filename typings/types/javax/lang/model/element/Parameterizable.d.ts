import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ElementKind } from '../../../../javax/lang/model/element/ElementKind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { TypeParameterElement } from '../../../../javax/lang/model/element/TypeParameterElement.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Parameterizable extends Element, Object{
    asType(): TypeMirror;
    getEnclosingElement(): Element;
    getKind(): ElementKind;
    getSimpleName(): Name;
    getTypeParameters(): TypeParameterElement[];
}