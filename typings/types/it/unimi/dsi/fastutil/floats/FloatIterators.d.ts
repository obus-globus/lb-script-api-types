import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { FloatIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterators$EmptyIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { FloatPredicate } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPredicate.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { PrimitiveIterator$OfDouble } from '../../../../../java/util/PrimitiveIterator$OfDouble.d.ts'
import type { DoublePredicate } from '../../../../../java/util/function/DoublePredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class FloatIterators extends Object {
    static EMPTY_ITERATOR: FloatIterators$EmptyIterator;
    static all(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static all(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static any(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static any(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static asFloatIterator(paramarg0: Iterator<Object>): FloatIterator;
    static asFloatIterator(paramarg0: ListIterator<Object>): FloatListIterator;
    static concat(paramarg0: (Object | null)[]): FloatIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): FloatIterator;
    static indexOf(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): number;
    static indexOf(paramarg0: FloatIterator, paramarg1: (param0: number) => kotlin.Boolean): number;
    static narrow(paramarg0: PrimitiveIterator$OfDouble): FloatIterator;
    static pour(paramarg0: FloatIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: FloatIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: FloatIterator): (Object | null)[];
    static pour(paramarg0: FloatIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): FloatListIterator;
    static uncheckedNarrow(paramarg0: PrimitiveIterator$OfDouble): FloatIterator;
    static unmodifiable(paramarg0: FloatBidirectionalIterator): FloatBidirectionalIterator;
    static unmodifiable(paramarg0: FloatIterator): FloatIterator;
    static unmodifiable(paramarg0: FloatListIterator): FloatListIterator;
    static unwrap(paramarg0: FloatIterator): number[];
    static unwrap(paramarg0: FloatIterator, paramarg1: number): number[];
    static unwrap(paramarg0: FloatIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: FloatIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: FloatIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: FloatIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: FloatIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: FloatIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: FloatIterator): (Object | null)[];
    static unwrapBig(paramarg0: FloatIterator, paramarg1: number): (Object | null)[];
    static widen(paramarg0: FloatIterator): DoubleIterator;
    static wrap(paramarg0: ByteIterator): FloatIterator;
    static wrap(paramarg0: CharIterator): FloatIterator;
    static wrap(paramarg0: ShortIterator): FloatIterator;
    static wrap(paramarg0: number[]): FloatListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): FloatListIterator;
    private constructor()
}