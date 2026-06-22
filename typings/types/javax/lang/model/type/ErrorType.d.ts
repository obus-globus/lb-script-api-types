import type { Element } from '../../../../javax/lang/model/element/Element.d.ts'
import type { DeclaredType } from '../../../../javax/lang/model/type/DeclaredType.d.ts'
import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ErrorType extends DeclaredType, Object{
    asElement(): Element;
    getEnclosingType(): TypeMirror;
    getKind(): TypeKind;
}