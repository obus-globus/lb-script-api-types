import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class CacheBase<K extends unknown, V extends unknown, D extends unknown> extends Object {
    constructor()
    createInstance(key: K, data: D): V;
    getInstance(key: K, data: D): V;
}