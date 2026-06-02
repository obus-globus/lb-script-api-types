import type { Object } from '../../../java/lang/Object.d.ts'
import type { FractionalSecondDirective$Companion } from '../../../kotlinx/datetime/format/FractionalSecondDirective$Companion.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { DecimalFractionFieldFormatDirective } from '../../../kotlinx/datetime/internal/format/DecimalFractionFieldFormatDirective.d.ts'
export class FractionalSecondDirective extends DecimalFractionFieldFormatDirective<TimeFieldContainer> {
    static Companion: FractionalSecondDirective$Companion;
    constructor(minDigits: number, maxDigits: number, zerosToAdd: number[])
    readonly builderRepresentation: string;
    // private maxDigits: number;
    // private minDigits: number;
    equals(other: Object | null): boolean;
    hashCode(): number;
}