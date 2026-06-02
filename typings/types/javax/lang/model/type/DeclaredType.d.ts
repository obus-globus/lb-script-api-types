import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ReferenceType } from '../../../../javax/lang/model/type/ReferenceType.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DeclaredType extends ReferenceType, Object{
    asElement(): Element;
    getEnclosingType(): TypeMirror;
    getTypeArguments(): TypeMirror[];
}