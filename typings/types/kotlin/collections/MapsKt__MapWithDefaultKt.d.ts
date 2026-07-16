import type { Object } from '../../java/lang/Object.d.ts'
export class MapsKt__MapWithDefaultKt extends Object {
    static getOrImplicitDefaultNullable<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static withDefault<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
    static withDefaultMutable<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
}