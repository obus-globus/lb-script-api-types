import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { FakeOverrideMembers } from '../../../../kotlin/reflect/jvm/internal/FakeOverrideMembers.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { KTypeSubstitutor } from '../../../../kotlin/reflect/jvm/internal/types/KTypeSubstitutor.d.ts'
export class FakeOverridesKt extends Object {
    static computeFakeOverrideMembers(paramarg0: KClassImpl<Object>): FakeOverrideMembers;
    static getAllMembers(paramarg0: KClassImpl<Object>): ReflectKCallable<Object>[];
    static isKotlin(paramarg0: Class<Object>): boolean;
    static isStatic(paramarg0: ReflectKCallable<Object>): boolean;
    static starProjectionInTopLevelTypeIsNotPossible(paramarg0: string): void;
    static substitutedWith(paramarg0: KTypeParameter[], paramarg1: KTypeParameter[]): KTypeSubstitutor;
}