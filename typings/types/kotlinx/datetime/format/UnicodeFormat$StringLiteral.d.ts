import type { Object } from '../../../java/lang/Object.d.ts'
import type { UnicodeFormat } from '../../../kotlinx/datetime/format/UnicodeFormat.d.ts'
import type { UnicodeFormat$Companion } from '../../../kotlinx/datetime/format/UnicodeFormat$Companion.d.ts'
export class UnicodeFormat$StringLiteral extends Object implements UnicodeFormat {
    static Companion: UnicodeFormat$Companion;
    constructor(literal: string)
    readonly literal: string;
    component1(): string;
    copy(literal: string): UnicodeFormat$StringLiteral;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}