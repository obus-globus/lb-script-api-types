import type { BadMap$Entry } from '../../../../com/typesafe/config/impl/BadMap$Entry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BadMap<K extends unknown, V extends unknown> extends Object {
    constructor()
    // private entries: BadMap$Entry[];
    // private size: number;
    copyingPut(arg0: K, arg1: V): BadMap<K, V>;
    get(arg0: K): V;
}