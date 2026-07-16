import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
export class PolyglotExtensionsKt extends Object {
    static asArray<T extends unknown>(self: Value): T[];
    static asBooleanArray(self: Value): boolean[];
    static asByteArray(self: Value): number[];
    static asCharArray(self: Value): string[];
    static asDoubleArray(self: Value): number[];
    static asFloatArray(self: Value): number[];
    static asIntArray(self: Value): number[];
    static asLongArray(self: Value): number[];
    static asShortArray(self: Value): number[];
    static asType<T extends unknown>(self: Value): T;
}