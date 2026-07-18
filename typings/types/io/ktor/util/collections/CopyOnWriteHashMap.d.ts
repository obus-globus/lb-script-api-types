import type { Object } from '../../../../java/lang/Object.d.ts'
export class CopyOnWriteHashMap<K extends unknown, V extends unknown> extends Object {
    constructor()
    computeIfAbsent(key: K, producer: (param0: K) => V): V;
    get(key: K): V | null;
    put(key: K, value: V): V | null;
    remove(key: K): V | null;
    set(key: K, value: V): void;
}