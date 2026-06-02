import type { Object } from '../../../java/lang/Object.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { SignedIntFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/SignedIntFieldFormatDirective.d.ts'
export class YearDirective extends SignedIntFieldFormatDirective<YearMonthFieldContainer> {
    constructor(padding: Padding, isYearOfEra: boolean)
    readonly builderRepresentation: string;
    // private isYearOfEra: boolean;
    // private padding: Padding;
    equals(other: Object | null): boolean;
    hashCode(): number;
}