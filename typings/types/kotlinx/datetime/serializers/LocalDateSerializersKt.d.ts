import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class LocalDateSerializersKt extends Object {
    static asKSerializer<T extends unknown>(self: DateTimeFormat<T>, serialName: string): KSerializer<T>;
}