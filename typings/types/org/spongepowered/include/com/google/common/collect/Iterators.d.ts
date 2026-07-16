import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
import type { UnmodifiableIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/UnmodifiableIterator.d.ts'
export class Iterators extends Object {
    static any<T extends unknown>(paramarg0: Iterator<T>, paramarg1: (param0: Object) => boolean): boolean;
    static concat<T extends unknown>(paramarg0: Iterator<Iterator<T>>): Iterator<T>;
    static contains(paramarg0: Iterator<Object>, paramarg1: Object): boolean;
    static elementsEqual(paramarg0: Iterator<Object>, paramarg1: Iterator<Object>): boolean;
    static filter<T extends unknown>(paramarg0: Iterator<T>, paramarg1: (param0: Object) => boolean): UnmodifiableIterator<T>;
    static forArray<T extends unknown>(...paramarg0: T[]): UnmodifiableIterator<T>;
    static getNext<T extends unknown>(paramarg0: Iterator<T>, paramarg1: T): T;
    static indexOf<T extends unknown>(paramarg0: Iterator<T>, paramarg1: (param0: Object) => boolean): number;
    static removeAll(paramarg0: Iterator<Object>, paramarg1: Object[]): boolean;
    static removeIf<T extends unknown>(paramarg0: Iterator<T>, paramarg1: (param0: Object) => boolean): boolean;
    static singletonIterator<T extends unknown>(paramarg0: T): UnmodifiableIterator<T>;
    static toString(paramarg0: Iterator<Object>): string;
    static transform<F extends unknown, T extends unknown>(paramarg0: Iterator<F>, paramarg1: (param0: Object) => T): Iterator<T>;
    static unmodifiableIterator<T extends unknown>(paramarg0: Iterator<T>): UnmodifiableIterator<T>;
}