import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { DecimalFraction } from '../../../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { NumberConsumer } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumer.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class FractionPartConsumer<Receiver extends unknown> extends NumberConsumer<Receiver> {
    constructor(minLength: number, maxLength: number, setter: AssignableField<Receiver, DecimalFraction>, name: string)
    // private maxLength: number;
    // private minLength: number;
    // private setter: AssignableField<Receiver, DecimalFraction>;
    consume(storage: Receiver, input: CharSequence, start: number, end: number): NumberConsumptionError | null;
}