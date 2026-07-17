import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { XCldrStub$Multimap } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/XCldrStub$Multimap.d.ts'
export class XCldrStub$Multimaps extends Object {
    static forMap<K extends unknown, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramsource: JavaMap<V, K>, paramtarget: R): R;
    static invertFrom<K extends unknown, V extends unknown, R extends XCldrStub$Multimap<K, V>>(paramsource: XCldrStub$Multimap<V, K>, paramtarget: R): R;
    constructor()
}