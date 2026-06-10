import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../../../../org/spongepowered/include/com/google/common/base/Predicate.d.ts'
import type { UnmodifiableIterator } from '../../../../../../../org/spongepowered/include/com/google/common/collect/UnmodifiableIterator.d.ts'
export class Iterators extends Object {
    static any(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): boolean;
    static concat(paramarg0: Iterator<Iterator<Object>>): Iterator<Object>;
    static contains(paramarg0: Iterator<Object>, paramarg1: Object): boolean;
    static elementsEqual(paramarg0: Iterator<Object>, paramarg1: Iterator<Object>): boolean;
    static filter(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): UnmodifiableIterator<Object>;
    static forArray(paramarg0: Object | null): UnmodifiableIterator<Object>;
    static getNext(paramarg0: Iterator<Object>, paramarg1: Object | null): Object | null;
    static indexOf(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): number;
    static removeAll(paramarg0: Iterator<Object>, paramarg1: Object[]): boolean;
    static removeIf(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): boolean;
    static singletonIterator(paramarg0: Object | null): UnmodifiableIterator<Object>;
    static toString(paramarg0: Iterator<Object>): string;
    static transform(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => boolean): Iterator<Object>;
    static unmodifiableIterator(paramarg0: Iterator<Object>): UnmodifiableIterator<Object>;
}