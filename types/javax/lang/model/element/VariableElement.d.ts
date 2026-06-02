import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface VariableElement extends Element, Object{
    asType(): TypeMirror;
    getConstantValue(): Object;
    getEnclosingElement(): Element;
    getSimpleName(): Name;
    isUnnamed(): boolean;
}