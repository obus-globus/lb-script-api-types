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
    static iterator(array: boolean[]): BooleanIterator;
    static iterator(array: number[]): ByteIterator;
    static iterator(array: string[]): CharIterator;
    static iterator(array: number[]): DoubleIterator;
    static iterator(array: number[]): FloatIterator;
    static iterator(array: number[]): IntIterator;
    static iterator(array: number[]): LongIterator;
    static iterator(array: number[]): ShortIterator;
}