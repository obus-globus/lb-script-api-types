import type { ShortBigListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBigListIterator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ShortBigListIterators$EmptyBigListIterator extends Object implements ShortBigListIterator, Serializable, Cloneable {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    clone(): Object;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextIndex(): number;
    nextShort(): number;
    previousIndex(): number;
    previousShort(): number;
    // private readResolve(): Object;
    set(arg0: number): void;
    skip(arg0: number): number;
}