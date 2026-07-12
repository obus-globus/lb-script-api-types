import type { ByteBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBidirectionalIterator.d.ts'
import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { ByteIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterators$EmptyIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { BytePredicate } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePredicate.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class ByteIterators extends Object {
    static EMPTY_ITERATOR: ByteIterators$EmptyIterator;
    static all(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): boolean;
    static all(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): boolean;
    static asByteIterator(paramarg0: Iterator<Object>): ByteIterator;
    static asByteIterator(paramarg0: ListIterator<Object>): ByteListIterator;
    static concat(...paramarg0: (Object | null)[]): ByteIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): ByteIterator;
    static fromTo(paramarg0: number, paramarg1: number): ByteListIterator;
    static indexOf(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): number;
    static indexOf(paramarg0: ByteIterator, paramarg1: (param0: number) => boolean): number;
    static narrow(paramarg0: PrimitiveIterator$OfInt): ByteIterator;
    static pour(paramarg0: ByteIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: ByteIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: ByteIterator): (Object | null)[];
    static pour(paramarg0: ByteIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): ByteListIterator;
    static uncheckedNarrow(paramarg0: PrimitiveIterator$OfInt): ByteIterator;
    static unmodifiable(paramarg0: ByteBidirectionalIterator): ByteBidirectionalIterator;
    static unmodifiable(paramarg0: ByteIterator): ByteIterator;
    static unmodifiable(paramarg0: ByteListIterator): ByteListIterator;
    static unwrap(paramarg0: ByteIterator): number[];
    static unwrap(paramarg0: ByteIterator, paramarg1: number): number[];
    static unwrap(paramarg0: ByteIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: ByteIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: ByteIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: ByteIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: ByteIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: ByteIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: ByteIterator): (Object | null)[];
    static unwrapBig(paramarg0: ByteIterator, paramarg1: number): (Object | null)[];
    static widen(paramarg0: ByteIterator): IntIterator;
    static wrap(paramarg0: number[]): ByteListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ByteListIterator;
    private constructor()
}