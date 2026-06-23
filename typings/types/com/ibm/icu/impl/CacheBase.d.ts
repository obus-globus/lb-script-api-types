import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheBase<K extends unknown, V extends unknown, D extends unknown> extends Object {
    constructor()
    createInstance(arg0: K, arg1: D): V;
    getInstance(arg0: K, arg1: D): V;
}