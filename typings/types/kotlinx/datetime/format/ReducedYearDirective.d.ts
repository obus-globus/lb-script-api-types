import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { ReducedIntFieldDirective } from '../../../kotlinx/datetime/internal/format/ReducedIntFieldDirective.d.ts'
export class ReducedYearDirective extends ReducedIntFieldDirective<YearMonthFieldContainer> {
    constructor(base: number, isYearOfEra: boolean)
    readonly base: number;
    readonly builderRepresentation: string;
    // private isYearOfEra: boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
}