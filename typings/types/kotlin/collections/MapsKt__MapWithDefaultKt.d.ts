import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MapsKt__MapWithDefaultKt extends Object {
    static getOrImplicitDefaultNullable<V extends unknown, K extends unknown>(self: JavaMap<K, V>, key: K): V;
    static withDefault<K extends unknown, V extends unknown>(self: JavaMap<K, V>, defaultValue: (param0: K) => V): JavaMap<K, V>;
    static withDefaultMutable<K extends unknown, V extends unknown>(self: JavaMap<K, V>, defaultValue: (param0: K) => V): JavaMap<K, V>;
}