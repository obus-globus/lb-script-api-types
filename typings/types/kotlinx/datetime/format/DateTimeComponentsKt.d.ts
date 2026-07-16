import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeComponents$Companion } from '../../../kotlinx/datetime/format/DateTimeComponents$Companion.d.ts'
import type { DateTimeComponentsContents } from '../../../kotlinx/datetime/format/DateTimeComponentsContents.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { GenericFieldSpec } from '../../../kotlinx/datetime/internal/format/GenericFieldSpec.d.ts'
export class DateTimeComponentsKt extends Object {
    static format(self: DateTimeFormat<DateTimeComponents>, block: (param0: DateTimeComponents) => void): string;
    static getTimeZoneField(): GenericFieldSpec<DateTimeComponentsContents, string>;
    static parse(self: DateTimeComponents$Companion, input: CharSequence, format: DateTimeFormat<DateTimeComponents>): DateTimeComponents;
    static parseOrNull(self: DateTimeComponents$Companion, input: CharSequence, format: DateTimeFormat<DateTimeComponents>): DateTimeComponents | null;
}