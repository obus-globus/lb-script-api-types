import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HeadersUtils extends Object {
    static getAllAsString<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>[], paramarg1: K): string[];
    static getAsString<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>[], paramarg1: K): string;
    static iteratorAsString(paramarg0: Map$Entry<CharSequence, CharSequence>[]): Iterator<Map$Entry<string, string>>;
    static namesAsString(paramarg0: Map$Entry<CharSequence, CharSequence>[]): string[];
    static toString<K extends unknown, V extends unknown>(paramarg0: Class<Object>, paramarg1: Iterator<Map$Entry<K, V>>, paramarg2: number): string;
    private constructor()
}