import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class OptionMap<T extends unknown> extends Object {
    static empty<T extends unknown>(): OptionMap<T>;
    constructor(map: { [key: string]: T })
    // private backingMap: { [key: string]: T };
    // private readonlyMap: { [key: string]: T };
    entrySet(): Map$Entry<string, T>[];
    equals(obj: Object | null): boolean;
    get(key: string): T;
    hashCode(): number;
}