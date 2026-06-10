import type { BooleanBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBidirectionalIterator.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { BooleanIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterators$EmptyIterator.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { BooleanPredicate } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class BooleanIterators extends Object {
    static EMPTY_ITERATOR: BooleanIterators$EmptyIterator;
    static all(paramarg0: BooleanIterator, paramarg1: (param0: boolean) => boolean): boolean;
    static any(paramarg0: BooleanIterator, paramarg1: (param0: boolean) => boolean): boolean;
    static asBooleanIterator(paramarg0: Iterator<Object>): BooleanIterator;
    static asBooleanIterator(paramarg0: ListIterator<Object>): BooleanListIterator;
    static concat(paramarg0: (Object | null)[]): BooleanIterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): BooleanIterator;
    static indexOf(paramarg0: BooleanIterator, paramarg1: (param0: boolean) => boolean): number;
    static pour(paramarg0: BooleanIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: BooleanIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: BooleanIterator): (Object | null)[];
    static pour(paramarg0: BooleanIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: boolean): BooleanListIterator;
    static unmodifiable(paramarg0: BooleanBidirectionalIterator): BooleanBidirectionalIterator;
    static unmodifiable(paramarg0: BooleanIterator): BooleanIterator;
    static unmodifiable(paramarg0: BooleanListIterator): BooleanListIterator;
    static unwrap(paramarg0: BooleanIterator): (Object | null)[];
    static unwrap(paramarg0: BooleanIterator, paramarg1: number): (Object | null)[];
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: BooleanIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: BooleanIterator): (Object | null)[];
    static unwrapBig(paramarg0: BooleanIterator, paramarg1: number): (Object | null)[];
    static wrap(paramarg0: (Object | null)[]): BooleanListIterator;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): BooleanListIterator;
    private constructor()
}