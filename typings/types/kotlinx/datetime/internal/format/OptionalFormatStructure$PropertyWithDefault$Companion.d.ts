import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FieldSpec } from '../../../../kotlinx/datetime/internal/format/FieldSpec.d.ts'
import type { OptionalFormatStructure$PropertyWithDefault } from '../../../../kotlinx/datetime/internal/format/OptionalFormatStructure$PropertyWithDefault.d.ts'
export class OptionalFormatStructure$PropertyWithDefault$Companion extends Object {
    fromField<T extends Object | number | string | boolean, E extends Object | number | string | boolean>(field: FieldSpec<T, E>): OptionalFormatStructure$PropertyWithDefault<T, E>;
}