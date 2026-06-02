import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { ChronoUnit } from '../../../../../../../../java/time/temporal/ChronoUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Instant } from '../../../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
export interface InstantFormatter extends Object{
    format(instant: Instant): string;
    formatTo(buffer: StringBuilder, instant: Instant): void;
    getPrecision(): ChronoUnit;
}