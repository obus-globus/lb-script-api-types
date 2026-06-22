import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReferenceType extends TypeMirror, Object{
    getKind(): TypeKind;
}