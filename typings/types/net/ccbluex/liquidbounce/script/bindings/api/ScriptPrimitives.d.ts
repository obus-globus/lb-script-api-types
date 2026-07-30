import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Because the languages used in scripts usually
 * have very broad requirements for numeric types.
 * For example, all numbers in JS are {@link Double},
 * which can cause problems on interoperations.
 *
 * The functions provided by this util can explicitly
 * convert script numbers or strings into primitives of the JVM.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives.kt:30}
 */
export class ScriptPrimitives extends Object {
    static INSTANCE: ScriptPrimitives;
    /**
     * Coerces the argument to a JVM `boolean` (useful when passing a value into Java interop that requires the exact primitive type).
     */
    boolean(boolean: boolean): boolean;
    boolean(string: string | null): boolean;
    /**
     * Coerces the argument to a JVM `byte`; a string is parsed (optionally with a radix, default 10).
     */
    byte(byte: number): number;
    byte(long: number): number;
    byte(string: string | null, radix?: number): number;
    /**
     * Coerces the argument to a JVM `char`; a string yields its first character.
     */
    char(char: string): string;
    char(long: number): string;
    char(string: string | null): string;
    /**
     * Coerces the argument to a JVM `double`; a string is parsed.
     */
    double(double: number): number;
    double(string: string | null): number;
    /**
     * Coerces the argument to a JVM `float`; a string is parsed.
     */
    float(double: number): number;
    float(float: number): number;
    float(string: string | null): number;
    /**
     * Coerces the argument to a JVM `int`; a string is parsed (optionally with a radix, default 10).
     */
    int(int: number): number;
    int(long: number): number;
    int(string: string | null, radix?: number): number;
    /**
     * Coerces the argument to a JVM `long`; a string is parsed (optionally with a radix, default 10).
     */
    long(long: number): number;
    long(string: string | null, radix?: number): number;
    /**
     * Coerces the argument to a JVM `short`; a string is parsed (optionally with a radix, default 10).
     */
    short(long: number): number;
    short(short: number): number;
    short(string: string | null, radix?: number): number;
}