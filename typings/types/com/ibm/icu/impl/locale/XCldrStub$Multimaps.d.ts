import type { XCldrStub$Multimap } from '../../../../../com/ibm/icu/impl/locale/XCldrStub$Multimap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class XCldrStub$Multimaps extends Object {
    static forMap<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): Map<K, V>;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramarg0: XCldrStub$Multimap<V, K>, paramarg1: R): R;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramarg0: Map<V, K>, paramarg1: R): R;
    constructor()
}