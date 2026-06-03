import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { LongConsumer as LongConsumer_2 } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongConsumer extends Consumer<number>, LongConsumer_2, Object{
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}