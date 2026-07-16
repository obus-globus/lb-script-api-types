import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { BiConsumer } from '../../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { InstantFormatter } from '../../../../../../../../org/apache/logging/log4j/core/util/internal/instant/InstantFormatter.d.ts'
export class InstantNumberFormatter extends Enum<InstantNumberFormatter> implements InstantFormatter {
    static EPOCH_MILLIS: InstantNumberFormatter;
    static EPOCH_MILLIS_NANOS: InstantNumberFormatter;
    static EPOCH_MILLIS_ROUNDED: InstantNumberFormatter;
    static EPOCH_NANOS: InstantNumberFormatter;
    static EPOCH_SECONDS: InstantNumberFormatter;
    static EPOCH_SECONDS_NANOS: InstantNumberFormatter;
    static EPOCH_SECONDS_ROUNDED: InstantNumberFormatter;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InstantNumberFormatter;
    static values(): InstantNumberFormatter[];
    private constructor(precision: ChronoUnit, formatter: (param0: Instant, param1: StringBuilder) => void)
    // private formatter: (param0: Instant, param1: StringBuilder) => void;
    readonly precision: ChronoUnit;
    format(instant: Instant): string;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    getPrecision(): ChronoUnit;
    name(): "EPOCH_NANOS" | "EPOCH_MILLIS" | "EPOCH_MILLIS_ROUNDED" | "EPOCH_MILLIS_NANOS" | "EPOCH_SECONDS" | "EPOCH_SECONDS_ROUNDED" | "EPOCH_SECONDS_NANOS";
}