import type { Locale } from '../../java/util/Locale.d.ts'
import type { CharCategory } from '../../kotlin/text/CharCategory.d.ts'
import type { CharDirectionality } from '../../kotlin/text/CharDirectionality.d.ts'
import type { CharsKt__CharJVMKt } from '../../kotlin/text/CharsKt__CharJVMKt.d.ts'
export class CharsKt__CharKt extends CharsKt__CharJVMKt {
    static checkRadix(paramarg0: number): number;
    static digitOf(paramarg0: string, paramarg1: number): number;
    static digitToChar(paramarg0: number): string;
    static digitToChar(paramarg0: number, paramarg1: number): string;
    static digitToInt(paramarg0: string): number;
    static digitToInt(paramarg0: string, paramarg1: number): number;
    static digitToIntOrNull(paramarg0: string): number;
    static digitToIntOrNull(paramarg0: string, paramarg1: number): number;
    static equals(paramarg0: string, paramarg1: string, paramarg2: boolean): boolean;
    static getCategory(paramarg0: string): CharCategory;
    static getDirectionality(paramarg0: string): CharDirectionality;
    static isSurrogate(paramarg0: string): boolean;
    static isWhitespace(paramarg0: string): boolean;
    static lowercase(paramarg0: string, paramarg1: Locale): string;
    static titlecase(paramarg0: string, paramarg1: Locale): string;
    static titlecase(paramarg0: string): string;
    static uppercase(paramarg0: string, paramarg1: Locale): string;
}