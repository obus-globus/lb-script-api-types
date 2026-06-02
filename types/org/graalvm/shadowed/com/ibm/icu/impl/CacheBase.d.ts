import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class CacheBase<K extends Object | number | string | boolean, V extends Object | number | string | boolean, D extends Object | number | string | boolean> extends Object {
    constructor()
    createInstance(key: K, data: D): V;
    getInstance(key: K, data: D): V;
}