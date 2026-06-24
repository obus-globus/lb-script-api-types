import type { TypeToken$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeToken$TypeCollector<K extends unknown> extends Object {
    private constructor()
    constructor(arg0: TypeToken$1)
    classesOnly(): TypeToken$TypeCollector<K>;
    collectTypes(type: K): K[];
    // private collectTypes(type: K, map: Map<K, number>): number;
    collectTypes(types: K[]): K[];
    getInterfaces(type: K): K[];
    getRawType(type: K): Class<Object>;
    getSuperclass(type: K): K;
}