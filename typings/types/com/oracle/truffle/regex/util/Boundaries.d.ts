import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Boundaries extends Object {
    static mapContainsKey<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>, paramkey: K): boolean;
    static mapGet<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>, paramkey: K): V;
    static mapKeySet<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): K[];
    static setToArray<T extends unknown>(paramset: T[], paramtypeProxy: T[]): T[];
    constructor()
}