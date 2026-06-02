import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HeadersUtils extends Object {
    static getAllAsString(paramarg0: Map$Entry<K, V>[], paramarg1: Object | null): string[];
    static getAsString(paramarg0: Map$Entry<K, V>[], paramarg1: Object | null): string;
    static iteratorAsString(paramarg0: (Object | null)[]): Iterator<Object>;
    static namesAsString(paramarg0: Map$Entry<K, V>[]): string[];
    static toString(paramarg0: Class<Object>, paramarg1: Iterator<Object>, paramarg2: number): string;
    private constructor()
}