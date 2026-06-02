import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { GenericFieldSpec } from '../../../kotlinx/datetime/internal/format/GenericFieldSpec.d.ts'
import type { UnsignedFieldSpec } from '../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
export class YearMonthFields extends Object {
    static INSTANCE: YearMonthFields;
    readonly month: UnsignedFieldSpec<YearMonthFieldContainer>;
    readonly year: GenericFieldSpec<YearMonthFieldContainer, number>;
}