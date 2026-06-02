import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormat$Companion } from '../../../kotlinx/datetime/format/DateTimeFormat$Companion.d.ts'
import type { CachedFormatStructure } from '../../../kotlinx/datetime/internal/format/CachedFormatStructure.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class AbstractDateTimeFormat<T extends Object | number | string | boolean, U extends Copyable<U>> extends Object implements DateTimeFormat<T> {
    static Companion: DateTimeFormat$Companion;
    protected constructor()
    readonly actualFormat: CachedFormatStructure<U>;
    readonly emptyIntermediate: U;
    format(value: T): string;
    formatTo<A extends Appendable>(appendable: A, value: T): A;
    intermediateFromValue(value: T): U;
    parse(input: CharSequence): T;
    parseOrNull(input: CharSequence): T | null;
    valueFromIntermediate(intermediate: U): T;
    valueFromIntermediateOrNull(intermediate: U): T | null;
}