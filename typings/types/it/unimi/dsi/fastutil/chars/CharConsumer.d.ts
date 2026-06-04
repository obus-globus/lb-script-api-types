import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharConsumer extends Consumer<string>, IntConsumer, Object{
    accept(arg0: string): void;
    accept(arg0: number): void;
    andThen(arg0: (param0: string) => void): (param0: string) => void;
    andThen(arg0: (param0: number) => void): (param0: string) => void;
    andThen(arg0: (param0: T) => void): (param0: T) => void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}