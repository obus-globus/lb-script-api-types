import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractCharIterator extends Object implements CharIterator {
    constructor()
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): string;
    skip(arg0: number): number;
}