import type { Object } from '../../../java/lang/Object.d.ts'
export class MapBuilder$Itr<K extends unknown, V extends unknown> extends Object {
    constructor(map: Map<K, V>)
    // private expectedModCount: number;
    // private index: number;
    /*not mapped: */ getIndex$kotlin_stdlib(): number;
    // private lastIndex: number;
    /*not mapped: */ getLastIndex$kotlin_stdlib(): number;
    // private map: Map<K, V>;
    /*not mapped: */ getMap$kotlin_stdlib(): Map<K, V>;
    checkForComodification(): void;
    hasNext(): boolean;
    initNext(): void;
    remove(): void;
}