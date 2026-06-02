import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class PolyglotExtensionsKt extends Object {
    static asArray(paramarg0: Value): Object | null;
    static asBooleanArray(paramarg0: Value): (Object | null)[];
    static asByteArray(paramarg0: Value): number[];
    static asCharArray(paramarg0: Value): string[];
    static asDoubleArray(paramarg0: Value): number[];
    static asFloatArray(paramarg0: Value): number[];
    static asIntArray(paramarg0: Value): number[];
    static asLongArray(paramarg0: Value): number[];
    static asShortArray(paramarg0: Value): number[];
    static asType(paramarg0: Value): Object | null;
}