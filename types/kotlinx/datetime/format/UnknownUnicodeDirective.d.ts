import type { UnicodeFormat$Companion } from '../../../kotlinx/datetime/format/UnicodeFormat$Companion.d.ts'
import type { UnicodeFormat$Directive } from '../../../kotlinx/datetime/format/UnicodeFormat$Directive.d.ts'
export class UnknownUnicodeDirective extends UnicodeFormat$Directive {
    static Companion: UnicodeFormat$Companion;
    constructor(formatLetter: string, formatLength: number)
    readonly formatLength: number;
    readonly formatLetter: string;
}