import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../../../../../java/time/LocalDateTime.d.ts'
import type { OffsetDateTime } from '../../../../../../java/time/OffsetDateTime.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SimpleStringTypeAdapter } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/SimpleStringTypeAdapter.d.ts'
export class Java8DateAdapterKt extends Object {
    static InstantAdapter: SimpleStringTypeAdapter<Instant>;
    static LocalDateAdapter: SimpleStringTypeAdapter<LocalDate>;
    static LocalDateTimeAdapter: SimpleStringTypeAdapter<LocalDateTime>;
    static OffsetDateTimeAdapter: SimpleStringTypeAdapter<OffsetDateTime>;
    static toUnderlinedString(localDateTime: LocalDateTime): string;
}