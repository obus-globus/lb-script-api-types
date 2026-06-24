import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { ReflectKCallable } from '../../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKProperty } from '../../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class ValueClassAwareCallerKt extends Object {
    static createValueClassAwareCallerIfNeeded(paramarg0: Caller<Member>, paramarg1: ReflectKCallable<Object>, paramarg2: boolean, paramarg3: number[]): Caller<Member>;
    static getInlineClassUnboxMethod(paramarg0: Class<Object>, paramarg1: ReflectKCallable<Object>): Method;
    static isUnderlyingPropertyOfValueClass(paramarg0: ReflectKProperty<Object>): boolean;
    static toInlineClass(paramarg0: KType): Class<Object>;
}