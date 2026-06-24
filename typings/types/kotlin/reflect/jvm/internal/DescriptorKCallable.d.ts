import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KTypeParameterImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterImpl.d.ts'
import type { ReflectKCallableImpl } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallableImpl.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { CallableMemberDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { DescriptorKType } from '../../../../kotlin/reflect/jvm/internal/types/DescriptorKType.d.ts'
export abstract class DescriptorKCallable<R extends unknown> extends ReflectKCallableImpl<R> {
    constructor(overriddenStorage: KCallableOverriddenStorage)
    // private _allParameters: ReflectProperties$LazySoftVal<KParameter[]>;
    // private _annotations: ReflectProperties$LazySoftVal<Annotation[]>;
    // private _parameters: ReflectProperties$LazySoftVal<KParameter[]>;
    // private _returnType: ReflectProperties$LazySoftVal<KType>;
    // private _typeParameters: ReflectProperties$LazySoftVal<KTypeParameterImpl[]>;
    readonly allParameters: KParameter[];
    readonly annotations: Annotation[];
    readonly descriptor: CallableMemberDescriptor;
    /*not mapped: */ isPackagePrivate(): boolean;
    readonly modality: Modality;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    // private computeParameters(includeReceivers: boolean): KParameter[];
    protected computeReturnType(): DescriptorKType;
}