import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Predicates extends Object {
    static alwaysFalse<T extends unknown>(): (param0: T) => boolean;
    static alwaysTrue<T extends unknown>(): (param0: T) => boolean;
    static and<T extends unknown>(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: T) => boolean;
    static and<T extends unknown>(paramcomponents: (param0: Object) => boolean[]): (param0: T) => boolean;
    static compose<A extends unknown, B extends unknown>(parampredicate: (param0: B) => boolean, paramfunction: (param0: A) => B): (param0: A) => boolean;
    static contains(parampattern: Pattern): (param0: CharSequence) => boolean;
    static containsPattern(parampattern: string): (param0: CharSequence) => boolean;
    static equalTo<T extends unknown>(paramtarget: T): (param0: T) => boolean;
    static in<T extends unknown>(paramtarget: T[]): (param0: T) => boolean;
    static instanceOf<T extends unknown>(paramclazz: Class<Object>): (param0: T) => boolean;
    static isNull<T extends unknown>(): (param0: T) => boolean;
    static not<T extends unknown>(parampredicate: (param0: T) => boolean): (param0: T) => boolean;
    static notNull<T extends unknown>(): (param0: T) => boolean;
    static or<T extends unknown>(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: T) => boolean;
    static or<T extends unknown>(paramcomponents: (param0: Object) => boolean[]): (param0: T) => boolean;
    static subtypeOf(paramclazz: Class<Object>): (param0: Class<Object>) => boolean;
    private constructor()
}