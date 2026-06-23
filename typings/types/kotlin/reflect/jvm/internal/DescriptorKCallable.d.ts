import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KTypeParameterImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterImpl.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { CallableMemberDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { DescriptorKType } from '../../../../kotlin/reflect/jvm/internal/types/DescriptorKType.d.ts'
export abstract class DescriptorKCallable<R extends unknown> extends Object implements KTypeParameterOwnerImpl, ReflectKCallable<R> {
    constructor()
    // private _absentArguments: ReflectProperties$LazySoftVal<(Object | null)[]>;
    // private _annotations: ReflectProperties$LazySoftVal<Annotation[]>;
    // private _parameters: ReflectProperties$LazySoftVal<KParameter[]>;
    // private _receiverParameters: ReflectProperties$LazySoftVal<KParameter[]>;
    // private _returnType: ReflectProperties$LazySoftVal<DescriptorKType>;
    // private _typeParameters: ReflectProperties$LazySoftVal<KTypeParameterImpl[]>;
    readonly annotations: Annotation[];
    readonly descriptor: CallableMemberDescriptor;
    /*not mapped: */ isAbstract(): boolean;
    // private /*not mapped: */ isAnnotationConstructor(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isOpen(): boolean;
    readonly parameters: KParameter[];
    // private parametersNeedMFVCFlattening: Lazy<boolean>;
    readonly receiverParameters: KParameter[];
    readonly returnType: KType;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    call(args: (Object | null)[]): R;
    // private callAnnotationConstructor(args: Map<KParameter, Object | null>): R;
    callBy(args: Map<KParameter, Object | null>): R;
    callDefaultMethod(args: Map<KParameter, Object | null>, continuationArgument: Continuation<Object> | null): R;
    // private defaultEmptyArray(type: KType): Object;
    // private extractContinuationArgument(): Type | null;
    // private getAbsentArguments(): (Object | null)[];
    // private getParameterTypeSize(parameter: KParameter): number;
}