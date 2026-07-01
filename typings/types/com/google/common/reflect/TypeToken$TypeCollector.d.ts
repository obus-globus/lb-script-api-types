import type { Invokable$MethodInvokable } from '../../../../com/google/common/reflect/Invokable$MethodInvokable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeToken$TypeCollector<K extends unknown> extends Object {
    constructor(arg0: Invokable$MethodInvokable<T>)
    classesOnly(): TypeToken$TypeCollector<K>;
    collectTypes(type: K): K[];
    // private collectTypes(type: K, map: Map<K, number>): number;
    collectTypes(types: K[]): K[];
    getInterfaces(type: K): K[];
    getRawType(type: K): Class<Object>;
    getSuperclass(type: K): K;
}