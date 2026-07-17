import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LongCollections extends Object {
    static emptyMap<V extends unknown>(): JavaMap<any, any>;
    static unmodifiableMap<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}