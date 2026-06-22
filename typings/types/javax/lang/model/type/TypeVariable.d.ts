import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { ReferenceType } from '../../../../javax/lang/model/type/ReferenceType.d.ts'
import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeVariable extends ReferenceType, Object{
    asElement(): Element;
    getKind(): TypeKind;
    getLowerBound(): TypeMirror;
    getUpperBound(): TypeMirror;
}