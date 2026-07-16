import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharCategory } from '../../kotlin/text/CharCategory.d.ts'
import type { CharDirectionality } from '../../kotlin/text/CharDirectionality.d.ts'
export class CharsKt__CharJVMKt extends Object {
    static checkRadix(radix: number): number;
    static digitOf(char: string, radix: number): number;
    static getCategory(paramarg0: string): CharCategory;
    static getDirectionality(paramarg0: string): CharDirectionality;
    static isWhitespace(self: string): boolean;
    static lowercase(self: string, locale: Locale): string;
    static titlecase(self: string, locale: Locale): string;
    static uppercase(self: string, locale: Locale): string;
}