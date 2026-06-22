import type { TypeKind } from '../../../../javax/lang/model/type/TypeKind.d.ts'
import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UnionType extends TypeMirror, Object{
    getAlternatives(): TypeMirror[];
    getKind(): TypeKind;
}