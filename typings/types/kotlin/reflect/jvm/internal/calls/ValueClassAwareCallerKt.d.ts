import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Member } from '../../../../../java/lang/reflect/Member.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { ReflectKCallable } from '../../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKProperty } from '../../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class ValueClassAwareCallerKt extends Object {
    static createValueClassAwareCallerIfNeeded<M extends Member>(self: Caller<M>, callable: ReflectKCallable<Object>, isDefault: boolean, forbidUnboxingForIndices: number[]): Caller<M>;
    static getInlineClassUnboxMethod(self: Class<Object>, callable: ReflectKCallable<Object>): Method;
    static isUnderlyingPropertyOfValueClass(self: ReflectKProperty<Object>): boolean;
    static toInlineClass(self: KType | null): Class<Object> | null;
}