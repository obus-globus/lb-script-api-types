import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CFunctionPointer } from '../../../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export class CEntryPointLiteral<T extends CFunctionPointer> extends Object {
    static create(paramdefiningClass: Class<Object>, parammethodName: string, paramparameterTypes: Object | null): CEntryPointLiteral<Object>;
    private constructor(definingClass: Class<Object>, methodName: string, parameterTypes: Class<Object>[])
    readonly functionPointer: CFunctionPointer;
    getFunctionPointer(): T;
}