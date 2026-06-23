import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Object2BooleanCacheTable$Node } from '../../../../../../../net/caffeinemc/mods/lithium/common/util/collections/Object2BooleanCacheTable$Node.d.ts'
export class Object2BooleanCacheTable<T extends unknown> extends Object {
    constructor(arg0: number, arg1: (param0: T) => boolean)
    // private mask: number;
    // private nodes: Object2BooleanCacheTable$Node<T>[];
    // private operator: (param0: T) => boolean;
    get(arg0: T): boolean;
}