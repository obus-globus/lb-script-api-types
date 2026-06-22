import type { ReferenceType } from '../../../../javax/lang/model/type/ReferenceType.d.ts'
import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ArrayType extends ReferenceType, Object{
    getComponentType(): TypeMirror;
    getKind(): TypeKind;
}