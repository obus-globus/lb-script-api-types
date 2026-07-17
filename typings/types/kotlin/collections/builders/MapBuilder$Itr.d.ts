import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MapBuilder$Itr<K extends unknown, V extends unknown> extends Object {
    constructor(map: JavaMap<K, V>)
    // private expectedModCount: number;
    // private index: number;
    /*not mapped: */ getIndex$kotlin_stdlib(): number;
    // private lastIndex: number;
    /*not mapped: */ getLastIndex$kotlin_stdlib(): number;
    // private map: JavaMap<K, V>;
    /*not mapped: */ getMap$kotlin_stdlib(): JavaMap<K, V>;
    checkForComodification(): void;
    hasNext(): boolean;
    initNext(): void;
    remove(): void;
}