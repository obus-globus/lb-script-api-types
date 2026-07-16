import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class MonthSerializersKt extends Object {
    static createEnumSerializer<E extends Enum<E>>(serialName: string, values: E[]): KSerializer<E>;
}