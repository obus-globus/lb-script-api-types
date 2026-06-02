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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptPrimitives.kt:21}
 */
export class ScriptPrimitives extends Object {
    static INSTANCE: ScriptPrimitives;
    boolean(boolean: boolean): boolean;
    boolean(string: string | null): boolean;
    byte(byte: number): number;
    byte(long: number): number;
    byte(string: string | null, radix: number): number;
    char(char: string): string;
    char(long: number): string;
    char(string: string | null): string;
    double(double: number): number;
    double(string: string | null): number;
    float(double: number): number;
    float(float: number): number;
    float(string: string | null): number;
    int(int: number): number;
    int(long: number): number;
    int(string: string | null, radix: number): number;
    long(long: number): number;
    long(string: string | null, radix: number): number;
    short(long: number): number;
    short(short: number): number;
    short(string: string | null, radix: number): number;
}