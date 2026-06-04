import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSpliterators$IteratorFromSpliterator extends Object implements CharConsumer, CharIterator {
    constructor(arg0: CharSpliterator)
    // private hasPeeked: boolean;
    // private holder: string;
    // private spliterator: CharSpliterator;
    accept(arg0: string): void;
    accept(arg0: number): void;
    andThen(arg0: (param0: string) => void): (param0: string) => void;
    andThen(arg0: (param0: number) => void): (param0: string) => void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): string;
    nextChar(): string;
    skip(arg0: number): number;
}