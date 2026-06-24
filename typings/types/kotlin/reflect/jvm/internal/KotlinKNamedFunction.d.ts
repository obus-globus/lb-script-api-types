import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKFunction } from '../../../../kotlin/reflect/jvm/internal/KotlinKFunction.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmType } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmValueParameter } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmValueParameter.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
import type { JvmMethodSignature } from '../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
export class KotlinKNamedFunction extends KotlinKFunction {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmFunction: KmFunction, overriddenStorage: KCallableOverriddenStorage)
    // private _typeParameterTable: Lazy<TypeParameterTable>;
    // private /*not mapped: */ getContextParameters(): KmValueParameter[];
    // private /*not mapped: */ getExtensionReceiverType(): KmType | null;
    /*not mapped: */ isExternal(): boolean;
    /*not mapped: */ isInfix(): boolean;
    /*not mapped: */ isInline(): boolean;
    /*not mapped: */ isOperator(): boolean;
    /*not mapped: */ isPrimaryConstructor(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    // private /*not mapped: */ getJvmSignature(): JvmMethodSignature;
    // private kmFunction: KmFunction;
    readonly modality: Modality;
    readonly name: string;
    readonly returnType: KType;
    // private /*not mapped: */ getTypeParameterTable(): TypeParameterTable;
    // private /*not mapped: */ getValueParameters(): KmValueParameter[];
    readonly visibility: KVisibility | null;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<Object>;
}