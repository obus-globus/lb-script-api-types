import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeToken$TypeCollector<K extends unknown> extends Object {
    private constructor()
    classesOnly(): TypeToken$TypeCollector<K>;
    collectTypes(type: K): K[];
    // private collectTypes(type: K, map: JavaMap<K, number>): number;
    collectTypes(types: K[]): K[];
    getInterfaces(type: K): K[];
    getRawType(type: K): Class<Object>;
    getSuperclass(type: K): K;
}