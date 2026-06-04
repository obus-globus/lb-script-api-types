import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractBooleanIterator extends Object implements BooleanIterator {
    constructor()
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    skip(arg0: number): number;
}