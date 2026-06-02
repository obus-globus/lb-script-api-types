import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Predicates extends Object {
    static alwaysFalse(): (param0: Object | null) => kotlin.Boolean;
    static alwaysTrue(): (param0: Object | null) => kotlin.Boolean;
    static and(paramfirst: (param0: Object | null) => kotlin.Boolean, paramsecond: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static and(paramcomponents: Object | null): (param0: Object | null) => kotlin.Boolean;
    static and(paramcomponents: (Object | null)[]): (param0: Object | null) => kotlin.Boolean;
    static compose(parampredicate: (param0: Object | null) => kotlin.Boolean, paramfunction: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static contains(parampattern: Pattern): (param0: CharSequence) => kotlin.Boolean;
    static containsPattern(parampattern: string): (param0: CharSequence) => kotlin.Boolean;
    static equalTo(paramtarget: Object | null): (param0: Object | null) => kotlin.Boolean;
    static in(paramtarget: E[]): (param0: Object | null) => kotlin.Boolean;
    static instanceOf(paramclazz: Class<Object>): (param0: Object | null) => kotlin.Boolean;
    static isNull(): (param0: Object | null) => kotlin.Boolean;
    static not(parampredicate: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static notNull(): (param0: Object | null) => kotlin.Boolean;
    static or(paramfirst: (param0: Object | null) => kotlin.Boolean, paramsecond: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static or(paramcomponents: Object | null): (param0: Object | null) => kotlin.Boolean;
    static or(paramcomponents: (Object | null)[]): (param0: Object | null) => kotlin.Boolean;
    static subtypeOf(paramclazz: Class<Object>): (param0: Object | null) => kotlin.Boolean;
    private constructor()
}