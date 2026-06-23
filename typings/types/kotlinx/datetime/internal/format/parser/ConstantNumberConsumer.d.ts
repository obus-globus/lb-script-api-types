import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { NumberConsumer } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumer.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class ConstantNumberConsumer<Receiver extends unknown> extends NumberConsumer<Receiver> {
    constructor(expected: string)
    // private expected: string;
    consume(storage: Receiver, input: CharSequence, start: number, end: number): NumberConsumptionError | null;
}