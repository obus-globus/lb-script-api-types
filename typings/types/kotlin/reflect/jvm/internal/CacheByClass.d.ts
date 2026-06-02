import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheByClass<V extends Object | number | string | boolean> extends Object {
    constructor()
    clear(): void;
    get(key: Class<Object>): V;
}