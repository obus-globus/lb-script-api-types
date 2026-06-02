import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeParameterElement extends Element, Object{
    asType(): TypeMirror;
    getBounds(): TypeMirror[];
    getEnclosingElement(): Element;
    getGenericElement(): Element;
}