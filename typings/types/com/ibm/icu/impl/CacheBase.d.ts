import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheBase<K extends Object | number | string | boolean, V extends Object | number | string | boolean, D extends Object | number | string | boolean> extends Object {
    constructor()
    createInstance(arg0: K, arg1: D): V;
    getInstance(arg0: K, arg1: D): V;
}