import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Accessor } from '../../../../kotlinx/datetime/internal/format/Accessor.d.ts'
import type { ComparisonPredicate } from '../../../../kotlinx/datetime/internal/format/ComparisonPredicate.d.ts'
import type { OptionalFormatStructure$PropertyWithDefault$Companion } from '../../../../kotlinx/datetime/internal/format/OptionalFormatStructure$PropertyWithDefault$Companion.d.ts'
export class OptionalFormatStructure$PropertyWithDefault<T extends unknown, E extends unknown> extends Object {
    static Companion: OptionalFormatStructure$PropertyWithDefault$Companion;
    private constructor(accessor: Accessor<T, E>, defaultValue: E)
    // private accessor: Accessor<T, E>;
    // private defaultValue: E;
    assignDefault(target: T): void;
    isDefaultComparisonPredicate(): ComparisonPredicate<T, E>;
}