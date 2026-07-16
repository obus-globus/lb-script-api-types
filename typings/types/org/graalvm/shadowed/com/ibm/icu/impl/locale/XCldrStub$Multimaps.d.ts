import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { XCldrStub$Multimap } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/XCldrStub$Multimap.d.ts'
export class XCldrStub$Multimaps extends Object {
    static forMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): Map<K, V>;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramsource: Map<V, K>, paramtarget: R): R;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramsource: XCldrStub$Multimap<V, K>, paramtarget: R): R;
    constructor()
}