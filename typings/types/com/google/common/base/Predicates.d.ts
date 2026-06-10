import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Predicates extends Object {
    static alwaysFalse(): (param0: Object) => boolean;
    static alwaysTrue(): (param0: Object) => boolean;
    static and(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: Object) => boolean;
    static and(paramcomponents: Object | null): (param0: Object) => boolean;
    static and(paramcomponents: (param0: Object) => boolean[]): (param0: Object) => boolean;
    static compose(parampredicate: (param0: Object) => boolean, paramfunction: (param0: Object) => boolean): (param0: Object) => boolean;
    static contains(parampattern: Pattern): (param0: Object) => boolean;
    static containsPattern(parampattern: string): (param0: Object) => boolean;
    static equalTo(paramtarget: Object | null): (param0: Object) => boolean;
    static in(paramtarget: (Object | null)[]): (param0: Object) => boolean;
    static instanceOf(paramclazz: Class<Object>): (param0: Object) => boolean;
    static isNull(): (param0: Object) => boolean;
    static not(parampredicate: (param0: Object) => boolean): (param0: Object) => boolean;
    static notNull(): (param0: Object) => boolean;
    static or(paramfirst: (param0: Object) => boolean, paramsecond: (param0: Object) => boolean): (param0: Object) => boolean;
    static or(paramcomponents: Object | null): (param0: Object) => boolean;
    static or(paramcomponents: (param0: Object) => boolean[]): (param0: Object) => boolean;
    static subtypeOf(paramclazz: Class<Object>): (param0: Object) => boolean;
    private constructor()
}