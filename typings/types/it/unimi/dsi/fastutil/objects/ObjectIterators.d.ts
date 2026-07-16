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
    static all<K extends unknown>(paramarg0: Iterator<K>, paramarg1: (param0: Object) => boolean): boolean;
    static any<K extends unknown>(paramarg0: Iterator<K>, paramarg1: (param0: Object) => boolean): boolean;
    static asObjectIterator<K extends unknown>(paramarg0: Iterator<K>): ObjectIterator<K>;
    static asObjectIterator<K extends unknown>(paramarg0: ListIterator<K>): ObjectListIterator<K>;
    static concat<K extends unknown>(...paramarg0: ObjectIterator<K>[]): ObjectIterator<K>;
    static concat<K extends unknown>(paramarg0: ObjectIterator<K>[], paramarg1: number, paramarg2: number): ObjectIterator<K>;
    static emptyIterator<K extends unknown>(): ObjectIterator<K>;
    static indexOf<K extends unknown>(paramarg0: Iterator<K>, paramarg1: (param0: Object) => boolean): number;
    static pour<K extends unknown>(paramarg0: Iterator<K>, paramarg1: Object[]): number;
    static pour<K extends unknown>(paramarg0: Iterator<K>, paramarg1: Object[], paramarg2: number): number;
    static pour<K extends unknown>(paramarg0: Iterator<K>): K[];
    static pour<K extends unknown>(paramarg0: Iterator<K>, paramarg1: number): K[];
    static singleton<K extends unknown>(paramarg0: K): ObjectListIterator<K>;
    static unmodifiable<K extends unknown>(paramarg0: ObjectBidirectionalIterator<K>): ObjectBidirectionalIterator<K>;
    static unmodifiable<K extends unknown>(paramarg0: ObjectIterator<K>): ObjectIterator<K>;
    static unmodifiable<K extends unknown>(paramarg0: ObjectListIterator<K>): ObjectListIterator<K>;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>): K[];
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: number): K[];
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: K[]): number;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: K[], paramarg2: number, paramarg3: number): number;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: Object[], paramarg2: number): number;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: K[][]): number;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: K[][], paramarg2: number, paramarg3: number): number;
    static unwrap<K extends unknown>(paramarg0: Iterator<K>, paramarg1: Object[]): number;
    static unwrapBig<K extends unknown>(paramarg0: Iterator<K>): K[][];
    static unwrapBig<K extends unknown>(paramarg0: Iterator<K>, paramarg1: number): K[][];
    static wrap<K extends unknown>(paramarg0: K[]): ObjectListIterator<K>;
    static wrap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): ObjectListIterator<K>;
    private constructor()
}