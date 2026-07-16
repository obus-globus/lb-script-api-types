import type { CharBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharBidirectionalIterator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { CharIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterators$EmptyIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { CharPredicate } from '../../../../../it/unimi/dsi/fastutil/chars/CharPredicate.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class CharIterators extends Object {
    static EMPTY_ITERATOR: CharIterators$EmptyIterator;
    static all(paramarg0: CharIterator, paramarg1: (param0: string) => boolean): boolean;
    static all(paramarg0: CharIterator, paramarg1: (param0: number) => boolean): boolean;
    static any(paramarg0: CharIterator, paramarg1: (param0: string) => boolean): boolean;
    static any(paramarg0: CharIterator, paramarg1: (param0: number) => boolean): boolean;
    static asCharIterator(paramarg0: Iterator<Object>): CharIterator;
    static asCharIterator(paramarg0: ListIterator<Object>): CharListIterator;
    static concat(...paramarg0: CharIterator[]): CharIterator;
    static concat(paramarg0: CharIterator[], paramarg1: number, paramarg2: number): CharIterator;
    static fromTo(paramarg0: string, paramarg1: string): CharListIterator;
    static indexOf(paramarg0: CharIterator, paramarg1: (param0: string) => boolean): number;
    static indexOf(paramarg0: CharIterator, paramarg1: (param0: number) => boolean): number;
    static narrow(paramarg0: PrimitiveIterator$OfInt): CharIterator;
    static pour(paramarg0: CharIterator, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: CharIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: CharIterator): (Object | null)[];
    static pour(paramarg0: CharIterator, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: string): CharListIterator;
    static uncheckedNarrow(paramarg0: PrimitiveIterator$OfInt): CharIterator;
    static unmodifiable(paramarg0: CharBidirectionalIterator): CharBidirectionalIterator;
    static unmodifiable(paramarg0: CharIterator): CharIterator;
    static unmodifiable(paramarg0: CharListIterator): CharListIterator;
    static unwrap(paramarg0: CharIterator): string[];
    static unwrap(paramarg0: CharIterator, paramarg1: number): string[];
    static unwrap(paramarg0: CharIterator, paramarg1: string[]): number;
    static unwrap(paramarg0: CharIterator, paramarg1: string[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: CharIterator, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: CharIterator, paramarg1: string[][]): number;
    static unwrap(paramarg0: CharIterator, paramarg1: string[][], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: CharIterator, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: CharIterator): string[][];
    static unwrapBig(paramarg0: CharIterator, paramarg1: number): string[][];
    static widen(paramarg0: CharIterator): IntIterator;
    static wrap(paramarg0: string[]): CharListIterator;
    static wrap(paramarg0: string[], paramarg1: number, paramarg2: number): CharListIterator;
    private constructor()
}