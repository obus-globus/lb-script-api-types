import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class Map<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static copyOf<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    static entry<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Map$Entry<K, V>;
    static of<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V, paramarg10: K, paramarg11: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V, paramarg10: K, paramarg11: V, paramarg12: K, paramarg13: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V, paramarg10: K, paramarg11: V, paramarg12: K, paramarg13: V, paramarg14: K, paramarg15: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V, paramarg10: K, paramarg11: V, paramarg12: K, paramarg13: V, paramarg14: K, paramarg15: V, paramarg16: K, paramarg17: V): JavaMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V, paramarg2: K, paramarg3: V, paramarg4: K, paramarg5: V, paramarg6: K, paramarg7: V, paramarg8: K, paramarg9: V, paramarg10: K, paramarg11: V, paramarg12: K, paramarg13: V, paramarg14: K, paramarg15: V, paramarg16: K, paramarg17: V, paramarg18: K, paramarg19: V): JavaMap<K, V>;
    static ofEntries<K extends unknown, V extends unknown>(...paramarg0: Map$Entry<K, V>[]): JavaMap<K, V>;
}