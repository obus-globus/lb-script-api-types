import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DataConsumer extends Consumer<number[]>, Object {
    accept(arg0: UUID): void;
    andThen(arg0: (param0: number[]) => void): (param0: number[]) => void;
}