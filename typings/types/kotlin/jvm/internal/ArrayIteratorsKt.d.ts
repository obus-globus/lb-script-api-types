import type { Object } from '../../../java/lang/Object.d.ts'
import type { BooleanIterator } from '../../../kotlin/collections/BooleanIterator.d.ts'
import type { ByteIterator } from '../../../kotlin/collections/ByteIterator.d.ts'
import type { CharIterator } from '../../../kotlin/collections/CharIterator.d.ts'
import type { DoubleIterator } from '../../../kotlin/collections/DoubleIterator.d.ts'
import type { FloatIterator } from '../../../kotlin/collections/FloatIterator.d.ts'
import type { IntIterator } from '../../../kotlin/collections/IntIterator.d.ts'
import type { LongIterator } from '../../../kotlin/collections/LongIterator.d.ts'
import type { ShortIterator } from '../../../kotlin/collections/ShortIterator.d.ts'
export class ArrayIteratorsKt extends Object {
    static iterator(paramarg0: (Object | null)[]): BooleanIterator;
    static iterator(paramarg0: number[]): ByteIterator;
    static iterator(paramarg0: string[]): CharIterator;
    static iterator(paramarg0: number[]): DoubleIterator;
    static iterator(paramarg0: number[]): FloatIterator;
    static iterator(paramarg0: number[]): IntIterator;
    static iterator(paramarg0: number[]): LongIterator;
    static iterator(paramarg0: number[]): ShortIterator;
}