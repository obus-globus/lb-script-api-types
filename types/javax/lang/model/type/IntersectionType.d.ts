import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IntersectionType extends TypeMirror, Object{
    getBounds(): TypeMirror[];
}