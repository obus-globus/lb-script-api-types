import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CFunctionPointer } from '../../../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export class CEntryPointLiteral<T extends CFunctionPointer> extends Object {
    static create<T extends CFunctionPointer>(paramdefiningClass: Class<Object>, parammethodName: string, ...paramparameterTypes: Class<Object>[]): CEntryPointLiteral<T>;
    private constructor(definingClass: Class<Object>, methodName: string, ...parameterTypes: Class<Object>[])
    readonly functionPointer: CFunctionPointer;
    getFunctionPointer(): T;
}