import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { NumberConsumer } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumer.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class UnsignedIntConsumer<Receiver extends Object | number | string | boolean> extends NumberConsumer<Receiver> {
    constructor(minLength: number | null, maxLength: number | null, setter: AssignableField<Receiver, number>, name: string, multiplyByMinus1: boolean)
    // private maxLength: number | null;
    // private minLength: number | null;
    // private multiplyByMinus1: boolean;
    // private setter: AssignableField<Receiver, number>;
    consume(storage: Receiver, input: CharSequence, start: number, end: number): NumberConsumptionError | null;
}