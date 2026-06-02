import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { DoubleIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterators$EmptyIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { DoublePredicate } from '../../../../../java/util/function/DoublePredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class DoubleIterators extends Object {
    static EMPTY_ITERATOR: DoubleIterators$EmptyIterator;
    static all(paramarg0: DoubleIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static any(paramarg0: DoubleIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static asDoubleIterator(paramarg0: Iterator<Object>): DoubleIterator;
    static asDoubleIterator(paramarg0: ListIterator<Object>): DoubleListIterator;
    static concat(paramarg0: (Object | null)[]): DoubleIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): DoubleIterator;
    static indexOf(paramarg0: DoubleIterator, paramarg1: (param0: number) => kotlin.Boolean): number;
    static pour(paramarg0: DoubleIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: DoubleIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: DoubleIterator): (Object | null)[];
    static pour(paramarg0: DoubleIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): DoubleListIterator;
    static unmodifiable(paramarg0: DoubleBidirectionalIterator): DoubleBidirectionalIterator;
    static unmodifiable(paramarg0: DoubleIterator): DoubleIterator;
    static unmodifiable(paramarg0: DoubleListIterator): DoubleListIterator;
    static unwrap(paramarg0: DoubleIterator): number[];
    static unwrap(paramarg0: DoubleIterator, paramarg1: number): number[];
    static unwrap(paramarg0: DoubleIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: DoubleIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: DoubleIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: DoubleIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: DoubleIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: DoubleIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: DoubleIterator): (Object | null)[];
    static unwrapBig(paramarg0: DoubleIterator, paramarg1: number): (Object | null)[];
    static wrap(paramarg0: ByteIterator): DoubleIterator;
    static wrap(paramarg0: CharIterator): DoubleIterator;
    static wrap(paramarg0: FloatIterator): DoubleIterator;
    static wrap(paramarg0: IntIterator): DoubleIterator;
    static wrap(paramarg0: ShortIterator): DoubleIterator;
    static wrap(paramarg0: number[]): DoubleListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): DoubleListIterator;
    private constructor()
}