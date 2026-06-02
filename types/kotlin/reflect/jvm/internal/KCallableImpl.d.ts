import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KCallable } from '../../../../kotlin/reflect/KCallable.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KTypeImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeImpl.d.ts'
import type { KTypeParameterImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterImpl.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class KCallableImpl<R extends Object | number | string | boolean> extends Object implements KCallable<R>, KTypeParameterOwnerImpl {
    constructor()
    call(args: (Object | null)[]): R;
    // private callAnnotationConstructor(args: Map<KParameter, Object | null>): R;
    callBy(args: Map<KParameter, Object | null>): R;
    callDefaultMethod(args: Map<KParameter, Object | null>, continuationArgument: Continuation<Object> | null): R;
    // private defaultEmptyArray(type: KType): Object;
    // private extractContinuationArgument(): Type | null;
    // private getAbsentArguments(): (Object | null)[];
    // private getParameterTypeSize(parameter: KParameter): number;
}