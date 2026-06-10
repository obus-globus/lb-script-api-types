import type { TextStyle } from '../../../java/time/format/TextStyle.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Era extends TemporalAccessor, TemporalAdjuster, Object {
    adjustInto(arg0: Temporal): Temporal;
    get(arg0: TemporalField): number;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    getLong(arg0: TemporalField): number;
    getValue(): number;
    isSupported(arg0: TemporalField): boolean;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
}