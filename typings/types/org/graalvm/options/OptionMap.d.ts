import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class OptionMap<T extends unknown> extends Object {
    static empty<T extends unknown>(): OptionMap<T>;
    constructor(map: JavaMap<string, T>)
    // private backingMap: JavaMap<string, T>;
    // private readonlyMap: JavaMap<string, T>;
    entrySet(): Map$Entry<string, T>[];
    equals(obj: Object | null): boolean;
    get(key: string): T;
    hashCode(): number;
}