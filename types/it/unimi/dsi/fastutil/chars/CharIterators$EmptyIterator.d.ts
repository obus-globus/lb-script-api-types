import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class CharIterators$EmptyIterator extends Object implements CharListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: string): void;
    add(arg0: string): void;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): string;
    nextChar(): string;
    nextIndex(): number;
    previous(): string;
    previousChar(): string;
    previousIndex(): number;
    // private readResolve(): Object;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
    skip(arg0: number): number;
}