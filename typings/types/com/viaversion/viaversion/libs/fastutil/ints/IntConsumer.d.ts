import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer as IntConsumer_2 } from '../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntConsumer extends Consumer<number>, IntConsumer_2, Object{
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}