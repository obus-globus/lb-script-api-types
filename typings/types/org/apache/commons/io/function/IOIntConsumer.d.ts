import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOIntConsumer extends Object {
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    asConsumer(): (param0: number) => void;
    asIntConsumer(): (param0: number) => void;
}