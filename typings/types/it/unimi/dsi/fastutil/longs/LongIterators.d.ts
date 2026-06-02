import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { LongIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterators$EmptyIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { LongPredicate } from '../../../../../java/util/function/LongPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class LongIterators extends Object {
    static EMPTY_ITERATOR: LongIterators$EmptyIterator;
    static all(paramarg0: LongIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static any(paramarg0: LongIterator, paramarg1: (param0: number) => kotlin.Boolean): boolean;
    static asLongIterator(paramarg0: Iterator<Object>): LongIterator;
    static asLongIterator(paramarg0: ListIterator<Object>): LongListIterator;
    static concat(paramarg0: (Object | null)[]): LongIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): LongIterator;
    static fromTo(paramarg0: number, paramarg1: number): LongBidirectionalIterator;
    static indexOf(paramarg0: LongIterator, paramarg1: (param0: number) => kotlin.Boolean): number;
    static pour(paramarg0: LongIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: LongIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: LongIterator): (Object | null)[];
    static pour(paramarg0: LongIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: number): LongListIterator;
    static unmodifiable(paramarg0: LongBidirectionalIterator): LongBidirectionalIterator;
    static unmodifiable(paramarg0: LongIterator): LongIterator;
    static unmodifiable(paramarg0: LongListIterator): LongListIterator;
    static unwrap(paramarg0: LongIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: LongIterator, paramarg1: number[]): number;
    static unwrap(paramarg0: LongIterator, paramarg1: number[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: LongIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: LongIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: LongIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: LongIterator): number[];
    static unwrap(paramarg0: LongIterator, paramarg1: number): number[];
    static unwrapBig(paramarg0: LongIterator): (Object | null)[];
    static unwrapBig(paramarg0: LongIterator, paramarg1: number): (Object | null)[];
    static wrap(paramarg0: ByteIterator): LongIterator;
    static wrap(paramarg0: CharIterator): LongIterator;
    static wrap(paramarg0: IntIterator): LongIterator;
    static wrap(paramarg0: ShortIterator): LongIterator;
    static wrap(paramarg0: number[]): LongListIterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): LongListIterator;
    private constructor()
}