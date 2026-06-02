import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectIterators$EmptyIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterators$EmptyIterator.d.ts'
import type { ObjectListIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectListIterator.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../java/util/ListIterator.d.ts'
export class ObjectIterators extends Object {
    static EMPTY_ITERATOR: ObjectIterators$EmptyIterator<Object>;
    static all(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => kotlin.Boolean): boolean;
    static any(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => kotlin.Boolean): boolean;
    static asObjectIterator(paramarg0: Iterator<Object>): ObjectIterator<Object>;
    static asObjectIterator(paramarg0: ListIterator<Object>): ObjectListIterator<Object>;
    static concat(paramarg0: Object | null): ObjectIterator<Object>;
    static concat(paramarg0: Object | null, paramarg1: number, paramarg2: number): ObjectIterator<Object>;
    static emptyIterator(): ObjectIterator<Object>;
    static indexOf(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => kotlin.Boolean): number;
    static pour(paramarg0: Iterator<Object>, paramarg1: (Object | null)[]): number;
    static pour(paramarg0: Iterator<Object>, paramarg1: (Object | null)[], paramarg2: number): number;
    static pour(paramarg0: Iterator<Object>): (Object | null)[];
    static pour(paramarg0: Iterator<Object>, paramarg1: number): (Object | null)[];
    static singleton(paramarg0: Object | null): ObjectListIterator<Object>;
    static unmodifiable(paramarg0: ObjectBidirectionalIterator<Object>): ObjectBidirectionalIterator<Object>;
    static unmodifiable(paramarg0: ObjectIterator<Object>): ObjectIterator<Object>;
    static unmodifiable(paramarg0: ObjectListIterator<Object>): ObjectListIterator<Object>;
    static unwrap(paramarg0: Iterator<Object>): Object | null;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: number): Object | null;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object | null): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[], paramarg2: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object | null): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[]): number;
    static unwrapBig(paramarg0: Iterator<Object>): Object | null;
    static unwrapBig(paramarg0: Iterator<Object>, paramarg1: number): Object | null;
    static wrap(paramarg0: Object | null): ObjectListIterator<Object>;
    static wrap(paramarg0: Object | null, paramarg1: number, paramarg2: number): ObjectListIterator<Object>;
    private constructor()
}