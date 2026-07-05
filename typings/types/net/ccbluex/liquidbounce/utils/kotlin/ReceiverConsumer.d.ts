import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReceiverConsumer<T extends unknown> extends Consumer<T>, Object {
    accept(t: T): void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
}