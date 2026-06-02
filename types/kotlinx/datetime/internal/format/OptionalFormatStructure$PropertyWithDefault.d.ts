import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { ComparisonPredicate } from '../../../../kotlinx/datetime/internal/format/ComparisonPredicate.d.ts'
import type { OptionalFormatStructure$PropertyWithDefault$Companion } from '../../../../kotlinx/datetime/internal/format/OptionalFormatStructure$PropertyWithDefault$Companion.d.ts'
export class OptionalFormatStructure$PropertyWithDefault<T extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Object {
    static Companion: OptionalFormatStructure$PropertyWithDefault$Companion;
    private constructor(accessor: Accessor<T, E>, defaultValue: E)
    // private accessor: Accessor<T, E>;
    // private defaultValue: E;
    assignDefault(target: T): void;
    isDefaultComparisonPredicate(): ComparisonPredicate<T, E>;
}