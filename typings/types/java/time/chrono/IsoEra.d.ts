import type { Class } from '../../../java/lang/Class.d.ts'
import type { Era } from '../../../java/time/chrono/Era.d.ts'
import type { TextStyle } from '../../../java/time/format/TextStyle.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IsoEra extends Enum<IsoEra> implements Era {
    static BCE: IsoEra;
    static CE: IsoEra;
    static of(paramarg0: number): IsoEra;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IsoEra;
    static values(): IsoEra[];
    private constructor()
    adjustInto(arg0: Temporal): Temporal;
    get(arg0: TemporalField): number;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    getLong(arg0: TemporalField): number;
    getValue(): number;
    isSupported(arg0: TemporalField): boolean;
    query<R extends unknown>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    name(): "BCE" | "CE";
}