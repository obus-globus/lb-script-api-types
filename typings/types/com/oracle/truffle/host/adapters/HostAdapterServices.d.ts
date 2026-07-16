import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { UnsupportedOperationException } from '../../../../../java/lang/UnsupportedOperationException.d.ts'
import type { CallSite } from '../../../../../java/lang/invoke/CallSite.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { MethodType } from '../../../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Value } from '../../../../../org/graalvm/polyglot/Value.d.ts'
export class HostAdapterServices extends Object {
    static bootstrap(paramlookup: MethodHandles$Lookup, parammethodName: string, paramtype: MethodType, paramflags: number): CallSite;
    static concatArrays(paramfixed: Object[], paramva: Object): Object[];
    static getClassOverrides(paramclassLoader: ClassLoader): Value;
    static hasMethod(paramobj: Value, paramname: string): boolean;
    static hasOwnMethod(paramobj: Value, paramname: string): boolean;
    static isFunction(paramobj: Object): boolean;
    static unsupported(parammethodName: string): UnsupportedOperationException;
    static wrapThrowable(paramt: Throwable): RuntimeException;
    private constructor()
}