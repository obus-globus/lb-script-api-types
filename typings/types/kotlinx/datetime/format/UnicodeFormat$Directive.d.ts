import type { Object } from '../../../java/lang/Object.d.ts'
import type { UnicodeFormat } from '../../../kotlinx/datetime/format/UnicodeFormat.d.ts'
import type { UnicodeFormat$Companion } from '../../../kotlinx/datetime/format/UnicodeFormat$Companion.d.ts'
export class UnicodeFormat$Directive extends Object implements UnicodeFormat {
    static Companion: UnicodeFormat$Companion;
    protected constructor()
    readonly formatLength: number;
    readonly formatLetter: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}