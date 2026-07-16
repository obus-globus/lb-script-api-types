import type { Locale } from '../../java/util/Locale.d.ts'
import type { CharCategory } from '../../kotlin/text/CharCategory.d.ts'
import type { CharDirectionality } from '../../kotlin/text/CharDirectionality.d.ts'
import type { CharsKt__CharKt } from '../../kotlin/text/CharsKt__CharKt.d.ts'
export class CharsKt extends CharsKt__CharKt {
    static checkRadix(radix: number): number;
    static digitOf(char: string, radix: number): number;
    static digitToChar(self: number): string;
    static digitToChar(self: number, radix: number): string;
    static digitToInt(self: string): number;
    static digitToInt(self: string, radix: number): number;
    static digitToIntOrNull(self: string): number | null;
    static digitToIntOrNull(self: string, radix: number): number | null;
    static equals(self: string, other: string, ignoreCase: boolean): boolean;
    static getCategory(paramarg0: string): CharCategory;
    static getDirectionality(paramarg0: string): CharDirectionality;
    static isSurrogate(self: string): boolean;
    static isWhitespace(self: string): boolean;
    static lowercase(self: string, locale: Locale): string;
    static titlecase(self: string, locale: Locale): string;
    static titlecase(self: string): string;
    static uppercase(self: string, locale: Locale): string;
}