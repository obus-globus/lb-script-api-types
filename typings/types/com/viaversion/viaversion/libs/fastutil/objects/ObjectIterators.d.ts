import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectListIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectListIterator.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../../../../../java/util/ListIterator.d.ts'
export class ObjectIterators extends Object {
    static all(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): boolean;
    static any(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): boolean;
    static asObjectIterator(paramarg0: Iterator<Object>): ObjectIterator<Object>;
    static asObjectIterator(paramarg0: ListIterator<Object>): ObjectListIterator<Object>;
    static concat(...paramarg0: ObjectIterator<Object>[]): ObjectIterator<Object>;
    static concat(paramarg0: ObjectIterator<Object>[], paramarg1: number, paramarg2: number): ObjectIterator<Object>;
    static emptyIterator(): ObjectIterator<Object>;
    static indexOf(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): number;
    static pour(paramarg0: Iterator<Object>): (Object | null)[];
    static pour(paramarg0: Iterator<Object>, paramarg1: number): (Object | null)[];
    static pour(paramarg0: Iterator<Object>, paramarg1: Object[]): number;
    static pour(paramarg0: Iterator<Object>, paramarg1: Object[], paramarg2: number): number;
    static singleton(paramarg0: Object | null): ObjectListIterator<Object>;
    static unmodifiable(paramarg0: ObjectBidirectionalIterator<Object>): ObjectBidirectionalIterator<Object>;
    static unmodifiable(paramarg0: ObjectIterator<Object>): ObjectIterator<Object>;
    static unmodifiable(paramarg0: ObjectListIterator<Object>): ObjectListIterator<Object>;
    static unwrap(paramarg0: Iterator<Object>): (Object | null)[];
    static unwrap(paramarg0: Iterator<Object>, paramarg1: number): (Object | null)[];
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[]): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object[], paramarg2: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[][]): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: (Object | null)[][], paramarg2: number, paramarg3: number): number;
    static unwrap(paramarg0: Iterator<Object>, paramarg1: Object[]): number;
    static unwrapBig(paramarg0: Iterator<Object>): (Object | null)[][];
    static unwrapBig(paramarg0: Iterator<Object>, paramarg1: number): (Object | null)[][];
    static wrap(paramarg0: (Object | null)[]): ObjectListIterator<Object>;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): ObjectListIterator<Object>;
    private constructor()
}