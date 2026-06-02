import type { TypeMirror } from '../../../../javax/lang/model/type/TypeMirror.d.ts'
import type { TypeVariable } from '../../../../javax/lang/model/type/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ExecutableType extends TypeMirror, Object{
    getParameterTypes(): TypeMirror[];
    getReceiverType(): TypeMirror;
    getReturnType(): TypeMirror;
    getThrownTypes(): TypeMirror[];
    getTypeVariables(): TypeVariable[];
}