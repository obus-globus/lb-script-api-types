import type { Object } from '../../../java/lang/Object.d.ts'
import type { UnicodeFormat } from '../../../kotlinx/datetime/format/UnicodeFormat.d.ts'
import type { UnicodeFormat$Companion } from '../../../kotlinx/datetime/format/UnicodeFormat$Companion.d.ts'
export class UnicodeFormat$Sequence extends Object implements UnicodeFormat {
    static Companion: UnicodeFormat$Companion;
    constructor(formats: UnicodeFormat[])
    readonly formats: UnicodeFormat[];
    component1(): UnicodeFormat[];
    copy(formats: UnicodeFormat[]): UnicodeFormat$Sequence;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}