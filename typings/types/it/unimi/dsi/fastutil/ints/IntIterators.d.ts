import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { IntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { IntIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterators$EmptyIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class IntIterators extends Object {
    static EMPTY_ITERATOR: IntIterators$EmptyIterator;
    static all(paramarg0: IntIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: IntIterator, paramarg1: (param0: number) => boolean): boolean;
    static asIntIterator(paramarg0: Iterator<Object>): IntIterator;
    static asIntIterator(paramarg0: ListIterator<Object>): IntListIterator;
    static concat(paramarg0: (Object | null)[]): IntIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): IntIterator;
    static fromTo(paramarg0: number, paramarg1: number): IntListIterator;
    static indexOf(paramarg0: IntIterator, paramarg1: (param0: number) => boolean): number;
    static pour(paramarg0: IntIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: IntIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: IntIterator): (Object | null)[];
    static pour(paramarg0: IntIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): IntListIterator;
    static unmodifiable(paramarg0: IntBidirectionalIterator): IntBidirectionalIterator;
    static unmodifiable(paramarg0: IntIterator): IntIterator;
    static unmodifiable(paramarg0: IntListIterator): IntListIterator;
    static unwrap(paramarg0: IntIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: IntIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: IntIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: IntIterator): number[];
    static unwrap(paramarg0: IntIterator, paramarg1: number): number[];
    static unwrap(paramarg0: IntIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: IntIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: IntIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: IntIterator): (Object | null)[];
    static unwrapBig(paramarg0: IntIterator, paramarg1: number): (Object | null)[];
    static wrap(paramarg0: ByteIterator): IntIterator;
    static wrap(paramarg0: CharIterator): IntIterator;
    static wrap(paramarg0: ShortIterator): IntIterator;
    static wrap(paramarg0: number[]): IntListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): IntListIterator;
    private constructor()
}