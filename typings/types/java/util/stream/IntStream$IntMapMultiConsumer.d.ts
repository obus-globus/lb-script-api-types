import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntStream$IntMapMultiConsumer extends Object {
    accept(arg0: number, arg1: (param0: number) => void): void;
}