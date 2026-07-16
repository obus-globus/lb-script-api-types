import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Predicates extends Object {
    static alwaysFalse(): (param0: Object | null) => boolean;
    static alwaysTrue(): (param0: Object | null) => boolean;
    static and(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static and(paramcomponents: (param0: Object) => boolean[]): (param0: Object | null) => boolean;
    static compose(parampredicate: (param0: Object | null) => boolean, paramfunction: (param0: Object | null) => Object | null): (param0: Object | null) => boolean;
    static contains(parampattern: Pattern): (param0: CharSequence) => boolean;
    static containsPattern(parampattern: string): (param0: CharSequence) => boolean;
    static equalTo(paramtarget: Object | null): (param0: Object | null) => boolean;
    static in(paramtarget: (Object | null)[]): (param0: Object | null) => boolean;
    static instanceOf(paramclazz: Class<Object>): (param0: Object | null) => boolean;
    static isNull(): (param0: Object | null) => boolean;
    static not(parampredicate: (param0: Object | null) => boolean): (param0: Object | null) => boolean;
    static notNull(): (param0: Object | null) => boolean;
    static or(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: Object | null) => boolean;
    static or(paramcomponents: (param0: Object) => boolean[]): (param0: Object | null) => boolean;
    static subtypeOf(paramclazz: Class<Object>): (param0: Class<Object>) => boolean;
    private constructor()
}