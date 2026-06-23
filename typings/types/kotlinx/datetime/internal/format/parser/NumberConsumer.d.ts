import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class NumberConsumer<Receiver extends unknown> extends Object {
    protected constructor(length: number | null, whatThisExpects: string)
    readonly length: number | null;
    readonly whatThisExpects: string;
    consume(storage: Receiver, input: CharSequence, start: number, end: number): NumberConsumptionError | null;
}