import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class PolyglotExtensionsKt extends Object {
    static asArray(value: Value): Object | null;
    static asBooleanArray(value: Value): (Object | null)[];
    static asByteArray(value: Value): number[];
    static asCharArray(value: Value): string[];
    static asDoubleArray(value: Value): number[];
    static asFloatArray(value: Value): number[];
    static asIntArray(value: Value): number[];
    static asLongArray(value: Value): number[];
    static asShortArray(value: Value): number[];
    static asType(value: Value): Object | null;
}