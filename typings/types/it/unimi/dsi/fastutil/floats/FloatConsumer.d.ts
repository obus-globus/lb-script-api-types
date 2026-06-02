import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatConsumer extends Consumer<number>, DoubleConsumer, Object{
    accept(arg0: number): void;
    accept(arg0: number): void;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}