import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { ShortIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterators$EmptyIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { ShortPredicate } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPredicate.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class ShortIterators extends Object {
    static EMPTY_ITERATOR: ShortIterators$EmptyIterator;
    static all(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): boolean;
    static all(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): boolean;
    static asShortIterator(paramarg0: Iterator<Object>): ShortIterator;
    static asShortIterator(paramarg0: ListIterator<Object>): ShortListIterator;
    static concat(paramarg0: (Object | null)[]): ShortIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): ShortIterator;
    static fromTo(paramarg0: number, paramarg1: number): ShortListIterator;
    static indexOf(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): number;
    static indexOf(paramarg0: ShortIterator, paramarg1: (param0: number) => boolean): number;
    static narrow(paramarg0: PrimitiveIterator$OfInt): ShortIterator;
    static pour(paramarg0: ShortIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: ShortIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: ShortIterator): (Object | null)[];
    static pour(paramarg0: ShortIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): ShortListIterator;
    static uncheckedNarrow(paramarg0: PrimitiveIterator$OfInt): ShortIterator;
    static unmodifiable(paramarg0: ShortBidirectionalIterator): ShortBidirectionalIterator;
    static unmodifiable(paramarg0: ShortIterator): ShortIterator;
    static unmodifiable(paramarg0: ShortListIterator): ShortListIterator;
    static unwrap(paramarg0: ShortIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: ShortIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: ShortIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: ShortIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: ShortIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: ShortIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: ShortIterator): number[];
    static unwrap(paramarg0: ShortIterator, paramarg1: number): number[];
    static unwrapBig(paramarg0: ShortIterator): (Object | null)[];
    static unwrapBig(paramarg0: ShortIterator, paramarg1: number): (Object | null)[];
    static widen(paramarg0: ShortIterator): IntIterator;
    static wrap(paramarg0: ByteIterator): ShortIterator;
    static wrap(paramarg0: number[]): ShortListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ShortListIterator;
    private constructor()
}