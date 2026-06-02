import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharCategory } from '../../kotlin/text/CharCategory.d.ts'
import type { CharDirectionality } from '../../kotlin/text/CharDirectionality.d.ts'
export class CharsKt__CharJVMKt extends Object {
    static checkRadix(paramarg0: number): number;
    static digitOf(paramarg0: string, paramarg1: number): number;
    static getCategory(paramarg0: string): CharCategory;
    static getDirectionality(paramarg0: string): CharDirectionality;
    static isWhitespace(paramarg0: string): boolean;
    static lowercase(paramarg0: string, paramarg1: Locale): string;
    static titlecase(paramarg0: string, paramarg1: Locale): string;
    static uppercase(paramarg0: string, paramarg1: Locale): string;
}