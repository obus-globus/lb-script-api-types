import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { NumberConsumer } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumer.d.ts'
import type { NumberConsumptionError } from '../../../../../kotlinx/datetime/internal/format/parser/NumberConsumptionError.d.ts'
export class ReducedIntConsumer<Receiver extends Object | number | string | boolean> extends NumberConsumer<Receiver> {
    constructor(length: number, setter: AssignableField<Receiver, number>, name: string, base: number)
    readonly base: number;
    // private baseFloor: number;
    // private baseMod: number;
    readonly length: number;
    // private modulo: number;
    // private setter: AssignableField<Receiver, number>;
    consume(storage: Receiver, input: CharSequence, start: number, end: number): NumberConsumptionError | null;
}