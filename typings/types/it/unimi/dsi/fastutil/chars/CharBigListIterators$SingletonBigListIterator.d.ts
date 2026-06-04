import type { CharBigListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigListIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharBigListIterators$SingletonBigListIterator extends Object implements CharBigListIterator {
    constructor(arg0: string)
    // private curr: number;
    // private element: string;
    add(arg0: string): void;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextChar(): string;
    nextIndex(): number;
    previousChar(): string;
    previousIndex(): number;
    set(arg0: string): void;
    skip(arg0: number): number;
}