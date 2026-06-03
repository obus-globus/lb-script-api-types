import type { CharBigListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBigListIterator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class CharBigListIterators$EmptyBigListIterator extends Object implements CharBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: string): void;
    add(arg0: string): void;
    back(arg0: number): number;
    back(arg0: number): number;
    back(arg0: number): number;
    clone(): Object;
    protected clone(): Object;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: string) => void): void;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextChar(): string;
    nextIndex(): number;
    previousChar(): string;
    previousIndex(): number;
    // private readResolve(): Object;
    set(arg0: string): void;
    set(arg0: string): void;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}