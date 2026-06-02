import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChatColorUtil extends Object {
    static ALL_CODES: string;
    static COLOR_CHAR: string;
    static STRIP_COLOR_PATTERN: Pattern;
    static getColorOrdinal(paramarg0: string): number;
    static isColorCode(paramarg0: string): boolean;
    static stripColor(paramarg0: string): string;
    static translateAlternateColorCodes(paramarg0: string): string;
    constructor()
}