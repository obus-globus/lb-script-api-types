import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WildcardType extends TypeMirror, Object{
    getExtendsBound(): TypeMirror;
    getSuperBound(): TypeMirror;
}