import type { Object } from '../../../java/lang/Object.d.ts'
import type { UnicodeFormat } from '../../../kotlinx/datetime/format/UnicodeFormat.d.ts'
import type { UnicodeFormat$Companion } from '../../../kotlinx/datetime/format/UnicodeFormat$Companion.d.ts'
export class UnicodeFormat$OptionalGroup extends Object implements UnicodeFormat {
    static Companion: UnicodeFormat$Companion;
    constructor(format: UnicodeFormat)
    readonly format: UnicodeFormat;
    component1(): UnicodeFormat;
    copy(format: UnicodeFormat): UnicodeFormat$OptionalGroup;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}